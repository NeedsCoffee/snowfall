type ContactPayload = {
  email: string;
  message: string;
  name: string;
  subject: string;
  website: string;
};

function getAllowedOrigins(csv: string): string[] {
  return csv
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
}

function htmlResponse(title: string, body: string, status = 200): Response {
  return new Response(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <style>
      body {
        margin: 0;
        font-family: Georgia, serif;
        background: #2b3a4a;
        color: #fdfaf3;
      }
      main {
        max-width: 42rem;
        margin: 0 auto;
        padding: 3rem 1.5rem;
      }
      a {
        color: #c0d4d2;
      }
      .panel {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 10px;
        padding: 1.5rem;
      }
      h1 {
        color: #c84b31;
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <main>
      <section class="panel">
        <h1>${title}</h1>
        ${body}
      </section>
    </main>
  </body>
</html>`,
    {
      status,
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}

function normalizeField(value: string | File | null): string {
  return typeof value === "string" ? value.trim() : "";
}

function getOrigin(request: Request): string {
  const origin = request.headers.get("origin");
  if (origin) {
    return origin;
  }

  const referer = request.headers.get("referer");
  if (!referer) {
    return "";
  }

  try {
    return new URL(referer).origin;
  } catch {
    return "";
  }
}

function isAllowedOrigin(request: Request, env: Env): boolean {
  const origin = getOrigin(request);
  if (!origin) {
    return false;
  }

  const allowedOrigins = getAllowedOrigins(env.ALLOWED_ORIGINS);
  return allowedOrigins.includes(origin);
}

async function parsePayload(request: Request): Promise<ContactPayload> {
  const formData = await request.formData();

  return {
    email: normalizeField(formData.get("email")).toLowerCase(),
    message: normalizeField(formData.get("message")),
    name: normalizeField(formData.get("name")),
    subject: normalizeField(formData.get("subject")),
    website: normalizeField(formData.get("website")),
  };
}

function validatePayload(payload: ContactPayload): string | null {
  if (!payload.name || payload.name.length > 120) {
    return "Please include your name.";
  }

  if (!payload.email || payload.email.length > 320 || !payload.email.includes("@")) {
    return "Please include a valid email address.";
  }

  if (!payload.message || payload.message.length < 10 || payload.message.length > 5000) {
    return "Please include a message between 10 and 5000 characters.";
  }

  if (payload.subject.length > 120) {
    return "Please keep the subject under 120 characters.";
  }

  return null;
}

function toPlainText(payload: ContactPayload): string {
  return [
    "New contact form message from robinbayliss.com",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Subject: ${payload.subject || "(no subject)"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

function toHtml(payload: ContactPayload): string {
  const escapedName = escapeHtml(payload.name);
  const escapedEmail = escapeHtml(payload.email);
  const escapedSubject = escapeHtml(payload.subject || "(no subject)");
  const escapedMessage = escapeHtml(payload.message).replace(/\n/g, "<br>");

  return `
    <h1>New contact form message</h1>
    <p><strong>Name:</strong> ${escapedName}</p>
    <p><strong>Email:</strong> ${escapedEmail}</p>
    <p><strong>Subject:</strong> ${escapedSubject}</p>
    <p><strong>Message:</strong><br>${escapedMessage}</p>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function prefersJson(request: Request): boolean {
  const accept = request.headers.get("accept") ?? "";
  return accept.includes("application/json");
}

function methodNotAllowed(): Response {
  return new Response("Method not allowed", {
    status: 405,
    headers: {
      allow: "GET, POST",
      "content-type": "text/plain; charset=utf-8",
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const isHealthPath = url.pathname === "/" || url.pathname === "/api/contact";
    const isSubmitPath =
      url.pathname === "/" || url.pathname === "/send" || url.pathname === "/api/contact";

    if (request.method === "GET" && isHealthPath) {
      return jsonResponse({
        ok: true,
        message: "Contact form worker is running.",
      });
    }

    if (request.method !== "POST" || !isSubmitPath) {
      return methodNotAllowed();
    }

    if (!isAllowedOrigin(request, env)) {
      return jsonResponse({ ok: false, error: "Origin not allowed." }, 403);
    }

    const payload = await parsePayload(request);

    // Quietly accept obvious bot submissions so the form does not become a probe.
    if (payload.website) {
      return new Response(null, {
        status: 303,
        headers: {
          location: env.SUCCESS_URL,
        },
      });
    }

    const validationError = validatePayload(payload);
    if (validationError) {
      if (prefersJson(request)) {
        return jsonResponse({ ok: false, error: validationError }, 400);
      }

      return htmlResponse(
        "That note needs a quick fix",
        `<p>${escapeHtml(validationError)}</p><p><a href="javascript:history.back()">Head back to the form</a></p>`,
        400,
      );
    }

    try {
      const result = await env.EMAIL.send({
        to: env.CONTACT_TO_EMAIL,
        from: {
          email: env.CONTACT_FROM_EMAIL,
          name: env.CONTACT_FROM_NAME,
        },
        replyTo: {
          email: payload.email,
          name: payload.name,
        },
        subject: payload.subject || `Website message from ${payload.name}`,
        text: toPlainText(payload),
        html: toHtml(payload),
      });

      console.log(
        JSON.stringify({
          event: "contact_form_sent",
          emailId: result.messageId,
          fromReplyTo: payload.email,
        }),
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : "Email delivery failed.";
      const code =
        error && typeof error === "object" && "code" in error ? String(error.code) : "UNKNOWN";

      console.error(
        JSON.stringify({
          event: "contact_form_send_failed",
          code,
          message,
        }),
      );

      if (prefersJson(request)) {
        return jsonResponse({ ok: false, error: "Email delivery failed." }, 502);
      }

      return htmlResponse(
        "The note did not send",
        "<p>The message hit a snag on the way out. Please try again in a bit.</p><p><a href=\"javascript:history.back()\">Back to the form</a></p>",
        502,
      );
    }

    if (prefersJson(request)) {
      return jsonResponse({ ok: true });
    }

    return new Response(null, {
      status: 303,
      headers: {
        location: env.SUCCESS_URL,
      },
    });
  },
} satisfies ExportedHandler<Env>;
