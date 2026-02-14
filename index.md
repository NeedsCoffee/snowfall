---
layout: default
title: Books
---

<div class="site-title-container">
  <h1 class="site-title">Robin Bayliss</h1>
  <h2 class="series-title">Snowball Falls Series</h2>
  <p class="ku-subtitle">Available on Kindle Unlimited</p>
  <p class="series-welcome-text">Welcome to Snowball Falls, a small town where cocoa, love, and Christmas miracles collide. Every story brings new love, old gossip, and one more reason to believe in happy endings.</p>
</div>

<div class="season-section" id="season-1">
  <h2 class="season-title">Season 1</h2>
  <div class="book-grid">
    {% for book in site.data.books %}
      {% if book.season == 1 %}
      <div class="book-card">
        <div class="book-cover">
          {% if book.cover_image and book.cover_image != "" %}
          <img src="{{ '/assets/images/' | append: book.cover_image | relative_url }}" alt="{{ book.info_title }} book cover">
          {% else %}
          <div class="book-cover-placeholder">Cover Coming Soon</div>
          {% endif %}
        </div>
        <div class="book-info">
          <h3>{{ book.info_title }}</h3>
          {% if book.subtitle %}
          <p class="book-subtitle">{{ book.subtitle }}</p>
          {% endif %}
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
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="season-section" id="season-2">
  <h2 class="season-title">Season 2</h2>
  <div class="book-grid">
    {% for book in site.data.books %}
      {% if book.season == 2 %}
      <div class="book-card">
        <div class="book-cover">
          {% if book.cover_image and book.cover_image != "" %}
          <img src="{{ '/assets/images/' | append: book.cover_image | relative_url }}" alt="{{ book.info_title }} book cover">
          {% else %}
          <div class="book-cover-placeholder">Cover Coming Soon</div>
          {% endif %}
        </div>
        <div class="book-info">
          <h3>{{ book.info_title }}</h3>
          {% if book.subtitle %}
          <p class="book-subtitle">{{ book.subtitle }}</p>
          {% endif %}
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
      {% endif %}
    {% endfor %}
  </div>
</div>

<!-- Start of Collection Section -->
<div class="section-title-container" id="collections">
    <h2 class="section-title">Get the Collections</h2>
</div>

<div class="collection-container">
  
  <!-- Collection 1: Books 1-3 -->
  <div class="collection-intro">
    <div class="collection-image">
      <a href="https://amzn.to/3WF8krA" target="_blank" rel="noopener noreferrer">
        <img src="{{ '/assets/images/collection-1-3-v2.png' | relative_url }}" alt="Snowball Falls Collection Books 1-3">
      </a>
    </div>
    <div class="collection-text">
      <h2><a href="https://amzn.to/3WF8krA" target="_blank" rel="noopener noreferrer">The Snowball Falls Collection: Books 1–3</a></h2>
      <p>Three swoony, laugh-out-loud Christmas romances set in the most magical small town in New Hampshire.</p>
      <ul>
        <li><strong>Snowed in With the Grump:</strong> A Grumpy Sunshine Christmas Romance</li>
        <li><strong>Mistletoe and Mayhem:</strong> A Fake Relationship Christmas Romance</li>
        <li><strong>Merry Matchmaking:</strong> A Second Chance Christmas Romance</li>
      </ul>
      <p>Curl up with cocoa and binge the first three Snowball Falls romances today, because in this town, happily-ever-after is always in season.</p>
      <a href="https://amzn.to/3WF8krA" class="buy-button collection-buy-button" target="_blank" rel="noopener noreferrer">Buy Now</a>
    </div>
  </div>

  <!-- Collection 2: Books 4-6 -->
  <div class="collection-intro">
    <div class="collection-image">
      <a href="https://amzn.to/3Lk0RM8" target="_blank" rel="noopener noreferrer">
        <img src="{{ '/assets/images/collection-4-6.png' | relative_url }}" alt="Snowball Falls Collection Books 4-6">
      </a>
    </div>
    <div class="collection-text">
      <h2><a href="https://amzn.to/3Lk0RM8" target="_blank" rel="noopener noreferrer">The Snowball Falls Collection: Books 4–6</a></h2>
      <p>Dive back into Snowball Falls for more laugh-out-loud, cozy Christmas romance.</p>
      <ul>
        <li><strong>Mistletoe and Mobsters:</strong> A Sweet Mafia Christmas Romance</li>
        <li><strong>Reindeer Games:</strong> A Sweet Firefighter Christmas Romance</li>
        <li><strong>Wish on the Winter Star:</strong> A Sweet Royal Christmas Romance</li>
      </ul>
      <p>Three more heartwarming stories from the town where the snow is always falling and the happy endings are guaranteed.</p>
      <a href="https://amzn.to/4he3s6v" class="buy-button collection-buy-button" target="_blank" rel="noopener noreferrer">Buy Now</a>
    </div>
  </div>

  <!-- Collection 3: Books 7-9 -->
  <div class="collection-intro">
    <div class="collection-image">
      <img src="{{ '/assets/images/collection-7-9.png' | relative_url }}" alt="Snowball Falls Collection Books 7-9">
    </div>
    <div class="collection-text">
      <h2>The Snowball Falls Collection: Books 7–9</h2>
      <p>The latest installment in the Snowball Falls series. Prepare for more holiday chaos and swoon-worthy romance.</p>
      <ul>
        <li><strong>Deck the Halls with Daddy Issues:</strong> A Single Dad Christmas Romance</li>
        <li><strong>The Holiday Switch:</strong> A Twin Swap Christmas Romance</li>
        <li><strong>Mistaken Under the Mistletoe:</strong> A Secret Celebrity Christmas Romance</li>
      </ul>
      <p>The final three stories in the series!</p>
      <a href="https://amzn.to/4nJGeXe" class="buy-button collection-buy-button" target="_blank" rel="noopener noreferrer">Buy Now</a>
    </div>
  </div>

</div>
<!-- End of Collection Section -->

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
