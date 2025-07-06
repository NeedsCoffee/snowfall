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

<div class="facebook-feed-wrapper">
  <h2 class="section-title">Latest News</h2>
  <div class="fb-page"
    data-href="https://www.facebook.com/RobinBaylissBooks/"
    data-tabs="Posts" data-width="" data-height=""
    data-small-header="true" data-adapt-container-width="true"
    data-hide-cover="true" data-show-facepile="false">
    <blockquote cite="https://www.facebook.com/RobinBaylissBooks/" class="fb-xfbml-parse-ignore">
      <a href="https://www.facebook.com/RobinBaylissBooks/">
        Robin Bayliss Writes Cozy Christmas Love Stories
      </a>
    </blockquote>
  </div>
</div>
