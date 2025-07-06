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
        <img src="{{ '/assets/images/' | append: book.cover_image | relative_url }}" alt="{{ book.title }} book cover">
      </div>
      <div class="book-info">
        <h3>{{ book.info_title }}</h3>
        <p>{{ book.summary | newline_to_br }}</p>
        {% if book.buy_now_url and book.buy_now_url != "" %}
          <a href="{{ book.buy_now_url }}" class="buy-button" target="_blank" rel="noopener noreferrer">Buy Now</a>
        {% else %}
          <span class="coming-soon-button">Coming Soon</span>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
