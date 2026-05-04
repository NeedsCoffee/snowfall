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
    <p class="contact-status">Form status: live once the Cloudflare Worker is deployed on <code>{{ site.contact_form_endpoint }}</code>.</p>
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

      <button type="submit">Send</button>
    </form>
  </section>
</div>
