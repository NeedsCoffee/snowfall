---
layout: default
title: Contact The Author
---

<div class="contact-page">
  <section class="contact-hero">
    <div class="contact-copy">
      <p class="category-kicker">Say hello</p>
      <h1 class="page-title">Contact Robin</h1>
      <p>Want to chat about books, Snowball Falls, or the correct ratio of cookie to frosting? Send Robin a message below. She reads every note with cocoa in hand.</p>
    </div>

    <aside class="contact-note">
      <h2>Before you send a note</h2>
      <ul>
        <li>Book news and release updates are best through the newsletter.</li>
        <li>Library requests belong on the libraries page.</li>
        <li>General messages, reader notes, and cosy chaos are welcome here.</li>
      </ul>
    </aside>
  </section>

  <section class="contact-form-panel">
    <h2>Message Robin</h2>
    <p class="contact-status" id="contact-status">Spam protection is loading.</p>
    <form class="contact-form" action="{{ site.contact_form_endpoint }}" method="POST">
      <label for="contact-name">Your Name</label>
      <input id="contact-name" type="text" name="name" required>

      <label for="contact-email">Your Email</label>
      <input id="contact-email" type="email" name="email" required>

      <label for="contact-subject">Subject</label>
      <input id="contact-subject" type="text" name="subject" maxlength="120" placeholder="What would you like to chat about?">

      <label for="contact-message">Message</label>
      <textarea id="contact-message" name="message" rows="7" required></textarea>

      <div class="contact-honeypot" aria-hidden="true">
        <label for="contact-website">Website</label>
        <input id="contact-website" type="text" name="website" tabindex="-1" autocomplete="off">
      </div>

      <div class="contact-turnstile">
        <div id="contact-turnstile-widget"></div>
      </div>
      <p class="contact-helper" id="contact-helper">The form will wake up once the verification widget finishes loading.</p>

      <button type="submit" id="contact-submit" disabled>Send</button>
    </form>
  </section>
</div>

<script>
  (function () {
    var endpoint = "{{ site.contact_form_endpoint }}";
    var statusNode = document.getElementById("contact-status");
    var helperNode = document.getElementById("contact-helper");
    var submitButton = document.getElementById("contact-submit");
    var widgetNode = document.getElementById("contact-turnstile-widget");
    var rendered = false;

    function setStatus(statusText, helperText, enabled) {
      if (statusNode) statusNode.textContent = statusText;
      if (helperNode) helperNode.textContent = helperText;
      if (submitButton) submitButton.disabled = !enabled;
    }

    function renderWidget(siteKey) {
      if (rendered) return;
      if (!window.turnstile || !widgetNode) {
        window.setTimeout(function () { renderWidget(siteKey); }, 150);
        return;
      }

      window.turnstile.render(widgetNode, {
        sitekey: siteKey,
        action: "contact",
        theme: "dark",
        callback: function () {
          rendered = true;
          setStatus(
            "Spam protection is active through Cloudflare Turnstile.",
            "If the verification expires before you hit send, refresh the page and try again.",
            true
          );
        },
        "error-callback": function () {
          setStatus(
            "Spam protection hit a snag.",
            "Refresh the page and try again before sending your note.",
            false
          );
        },
        "expired-callback": function () {
          setStatus(
            "Verification expired.",
            "Refresh the page and try again before sending your note.",
            false
          );
        }
      });
    }

    fetch(endpoint + "/turnstile-config", { credentials: "omit" })
      .then(function (response) {
        if (!response.ok) throw new Error("config");
        return response.json();
      })
      .then(function (data) {
        if (!data || !data.siteKey) throw new Error("missing");
        renderWidget(data.siteKey);
      })
      .catch(function () {
        setStatus(
          "Spam protection is unavailable right now.",
          "Please refresh the page and try again in a moment.",
          false
        );
      });
  }());
</script>
