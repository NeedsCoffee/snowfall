---
layout: default
title: Books
---

<div class="site-title-container">
  <h1 class="site-title">Robin Bayliss</h1>
  <h2 class="series-title">Snowball Falls Series</h2>
  <p class="ku-subtitle">Available on Kindle Unlimited</p>
</div>

<div class="collection-intro">
  <div class="collection-image">
    <a href="https://amzn.to/3IyiW8f" target="_blank" rel="noopener noreferrer">
      <img src="{{ '/assets/images/collection-1-3.jpg' | relative_url }}" alt="Snowball Falls Collection Books 1-3">
    </a>
  </div>
  <div class="collection-text">
    <h2><a href="https://amzn.to/3IyiW8f" target="_blank" rel="noopener noreferrer">The Snowball Falls Collection: Books 1-3</a></h2>
    <p>Three swoony, laugh-out-loud Christmas romances set in the most magical small town in New Hampshire.</p>
    <ul>
      <li><strong>Snowed In With the Grump</strong> - A glitter-obsessed kindergarten teacher gets snowed in with a grumpy carpenter, and sparks fly hotter than the firewood.</li>
      <li><strong>Mistletoe and Mayhem</strong> - An event planner’s perfect Christmas festival is derailed when her brewery-owning nemesis crashes the party. and one fake engagement changes everything.</li>
      <li><strong>Merry Matchmaking</strong> - A photographer returns home only to be paired with her veterinarian ex in the town’s holiday dating scheme, where old flames refuse to die.</li>
    </ul>
    <p>Curl up with cocoa and binge the first three Snowball Falls romances today, because in this town, happily-ever-after is always in season.</p>
    <a href="https://amzn.to/3IyiW8f" class="buy-button collection-buy-button" target="_blank" rel="noopener noreferrer">Buy Now</a>
  </div>
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
        <div class="button-group">
          {% if book.buy_now_url and book.buy_now_url != "" %}
          <a href="{{ book.buy_now_url }}" class="buy-button" target="_blank" rel="noopener noreferrer">Buy Now</a>
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
    </div>
  {% endfor %}
</div>

<p class="newsletter-prompt">
  Want more snow-kissed romance? 
  <a href="https://subscribepage.io/RobinBayliss" target="_blank">Join Robin's newsletter</a> 
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
