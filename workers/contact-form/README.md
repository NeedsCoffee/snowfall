# Contact Form Worker

This Worker accepts the site contact form submission and sends it as an email with Cloudflare Email Service.

## What it expects

- The marketing site posts to `https://api.robinbayliss.com`
- The Worker is attached to the `api.robinbayliss.com` hostname
- Email sending is enabled for the domain in Cloudflare

## Setup

1. Install dependencies:

   ```powershell
   npm install
   ```

2. Generate Worker types:

   ```powershell
   npm run typegen
   ```

3. Create a local secrets file from `.dev.vars.example`:

   ```powershell
   Copy-Item .dev.vars.example .dev.vars
   ```

4. Edit `.dev.vars` with the real private email values:

   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
   - `SECRET_KEY`
   - `SITE_KEY`

5. Review the non-secret values in `wrangler.jsonc`:

   - `CONTACT_FROM_NAME`
   - `SUCCESS_URL`
   - `TURNSTILE_EXPECTED_ACTION`
   - `TURNSTILE_EXPECTED_HOSTNAME`

6. Make sure the sender address belongs to the verified domain.

7. Create a Cloudflare Turnstile widget for the contact form and place its public site key in the Jekyll site config:

   - `_config.yml` -> `contact_form_turnstile_site_key`

8. Deploy:

   ```powershell
   npm run deploy
   ```

9. For Cloudflare-hosted production secrets, add them as Worker secrets instead of storing them in `wrangler.jsonc`.

## Notes

- The form includes a hidden `website` field as a basic bot trap.
- Turnstile tokens are verified server-side with Cloudflare Siteverify before mail is sent.
- The public Turnstile site key is served by the Worker at `/turnstile-config`.
- The Worker only accepts requests from origins listed in `ALLOWED_ORIGINS`.
- Successful browser form submits redirect to `/contact-thanks/`.
- `.dev.vars` is for local development only and should not be committed.
