---
layout: default
title: Books
---

<div class="site-title-container">
  <h1 class="site-title">Robin Bayliss</h1>
  <h2 class="series-title">Snowball Falls Series</h2>
</div>

<div class="book-grid">
  {% for book in site.data.books %}
    <div class="book-card">
      <div class="book-cover">
        <img src="/assets/images/{{ book.cover_image }}" alt="{{ book.title }} book cover">
        <div class="cover-overlay-title">
          {{ book.overlay_title | newline_to_br }}
        </div>
      </div>
      <div class="book-info">
        <h3>{{ book.info_title }}</h3>
        <p>{{ book.summary }}</p>
        <a href="#" class="buy-button">Buy Now</a>
      </div>
    </div>
  {% endfor %}
</div>
