---
layout: default
title: Books
---

<div class="site-title-container">
  <h1 class="site-title">Robin Bayliss</h1>
  <h2 class="series-title">Snowball Falls Series</h2>
  <p class="ku-subtitle">Available on Kindle Unlimited</p>
  <p class="ku-subtitle">Prefer to borrow books? <a class="homepage-library-link" href="{{ '/library/' | relative_url }}">Read Robin Bayliss free through your local library.</a></p>
  <p class="series-welcome-text">Welcome to Snowball Falls, a small town where cocoa, love, and Christmas miracles collide. Every story brings new love, old gossip, and one more reason to believe in happy endings.</p>
</div>

{% assign featured_book = site.data.books | where_exp: "book", "book.categories contains 'new-in'" | first %}

<section class="browse-intro" aria-labelledby="browse-snowball-falls">
  <div class="browse-intro-copy">
    <p class="category-kicker">Start anywhere</p>
    <h2 id="browse-snowball-falls" class="browse-intro-title">All Snowball Falls romances are cozy and standalone.</h2>
    <p class="browse-intro-text">Pick your favorite trope, jump in wherever you like, and let Snowball Falls handle the twinkle lights, kisses, and Christmas chaos.</p>
  </div>
</section>

<section class="featured-category" aria-labelledby="new-in-snowball-falls">
  <div class="featured-category-copy">
    <p class="category-kicker">New in Snowball Falls</p>
    <h2 id="new-in-snowball-falls">{{ featured_book.info_title }}</h2>
    {% if featured_book.subtitle %}
    <p class="featured-subtitle">{{ featured_book.subtitle }}</p>
    {% endif %}
    <p>{{ featured_book.summary }}</p>
    <div class="button-group button-group-inline">
      {% if featured_book.buy_now_url and featured_book.buy_now_url != "" %}
      <a href="{{ featured_book.buy_now_url }}" class="buy-button" target="_blank" rel="noopener noreferrer">Buy now or borrow free from your library</a>
      {% else %}
      <span class="coming-soon-button">Coming Soon</span>
      {% endif %}
      {% if featured_book.listen_now_url and featured_book.listen_now_url != "" %}
      <a href="{{ featured_book.listen_now_url }}" class="listen-now-button" target="_blank" rel="noopener noreferrer">🎧 Listen Now</a>
      {% else %}
      <span class="audio-coming-soon-button">🎧 Listen Soon</span>
      {% endif %}
    </div>
  </div>
  <div class="featured-category-cover">
    <img src="{{ '/assets/images/' | append: featured_book.cover_image | relative_url }}" alt="{{ featured_book.info_title }} book cover">
  </div>
</section>

{% for category in site.data.categories %}
<section class="category-section" aria-labelledby="{{ category.slug }}">
  <div class="category-header">
    {% if category.kicker %}
    <p class="category-kicker">{{ category.kicker }}</p>
    {% endif %}
    <h2 id="{{ category.slug }}" class="category-title">{{ category.title }}</h2>
  </div>
  <div class="category-book-grid">
    {% assign category_books = site.data.books | where_exp: "book", "book.categories contains category.slug" %}
    {% for book in category_books %}
    <article class="category-book-card">
      <div class="category-book-cover">
        {% if book.cover_image and book.cover_image != "" %}
        <img src="{{ '/assets/images/' | append: book.cover_image | relative_url }}" alt="{{ book.info_title }} book cover">
        {% else %}
        <div class="book-cover-placeholder">Coming Soon</div>
        {% endif %}
      </div>
      <div class="category-book-info">
        <h3>{{ book.info_title }}</h3>
        {% if book.subtitle %}
        <p class="book-subtitle">{{ book.subtitle }}</p>
        {% endif %}
        {% if book.summary and book.summary != "" %}
        <p class="category-book-summary">{{ book.summary }}</p>
        {% endif %}
        <div class="button-group">
          {% if book.buy_now_url and book.buy_now_url != "" %}
          <a href="{{ book.buy_now_url }}" class="buy-button" target="_blank" rel="noopener noreferrer">Buy now</a>
          {% else %}
          <span class="coming-soon-button">Coming Soon</span>
          {% endif %}
          {% if book.listen_now_url and book.listen_now_url != "" %}
          <a href="{{ book.listen_now_url }}" class="listen-now-button" target="_blank" rel="noopener noreferrer">🎧 Listen Now</a>
          {% else %}
          <span class="audio-coming-soon-button">🎧 Listen Soon</span>
          {% endif %}
        </div>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
{% endfor %}

<p class="newsletter-prompt">
  Want more snow-kissed romance? 
  <a href="{{ 'https://robinbayliss.substack.com/subscribe' | absolute_url }}" target="_blank">Join Robin's newsletter</a> 
  for behind-the-scenes peeks and cat cameos <svg class="newsletter-icon" xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 100 100" style="vertical-align: -0.15em; margin-left: 0.2em;"><text y=".9em" font-size="90" fill="#ffffff">🐾&#xFE0E;</text></svg>
</p>

<div class="facebook-feed-wrapper">
  <h2 class="section-title">Latest News</h2>
  <div class="fb-page" data-href="https://www.facebook.com/RobinBaylissBooks/" data-tabs="timeline" data-width="500" data-height="1000"
    data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-lazy="true">
    <blockquote class="fb-xfbml-parse-ignore" cite="https://www.facebook.com/RobinBaylissBooks/">
      <a href="https://www.facebook.com/RobinBaylissBooks/">
        Robin Bayliss Writes Cozy Christmas Love Stories
      </a>
    </blockquote>
  </div>
</div>
