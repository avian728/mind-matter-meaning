---
layout: default
title: Mind Matter Meaning
description: Exploring reality through science, philosophy, and literature.
---
<section class="hero">
  <div class="hero-inner">
    <div class="hero-copy">
    <p class="eyebrow">Permanent academic knowledge platform</p>
    <h1>Mind • Matter • Meaning</h1>
    <p>Exploring reality through science, philosophy, literature, mathematics, artificial intelligence, logic, and the history of ideas.</p>
    <p class="hero-byline">By Abhay Pandey</p>
    <div class="hero-actions">
      <a class="button" href="{{ '/archive/' | relative_url }}">Browse Archive</a>
      <a class="button secondary" href="{{ '/search/' | relative_url }}">Search Articles</a>
    </div>
    </div>
    <figure class="hero-portrait">
      <img src="{{ '/assets/images/abhay-pandey.jpeg' | relative_url }}" alt="Abhay Pandey at a historic fort" width="1100" height="1374">
      <figcaption>Abhay Pandey</figcaption>
    </figure>
  </div>
</section>

<section class="section">
  <p class="eyebrow">Featured Article</p>
  {% assign featured = site.posts | where: "title", "Why Do We Need Philosophy?" | first %}
  {% if featured %}{% include post-card.html post=featured %}{% endif %}
</section>

<section class="section">
  <p class="eyebrow">Latest Articles</p>
  <div class="card-grid">
    {% for post in site.posts limit:6 %}
      {% include post-card.html post=post %}
    {% endfor %}
  </div>
</section>

<section class="section">
  <p class="eyebrow">Disciplines</p>
  <div class="card-grid">
    <article class="post-card"><h3><a href="{{ '/philosophy/' | relative_url }}">Philosophy</a></h3><p>Metaphysics, epistemology, logic, ethics, and conceptual analysis.</p></article>
    <article class="post-card"><h3><a href="{{ '/science/' | relative_url }}">Science</a></h3><p>Scientific method, explanation, evidence, and history of science.</p></article>
    <article class="post-card"><h3><a href="{{ '/physics/' | relative_url }}">Physics</a></h3><p>Quantum theory, relativity, thermodynamics, and mathematical physics.</p></article>
    <article class="post-card"><h3><a href="{{ '/mathematics/' | relative_url }}">Mathematics</a></h3><p>Proof, structure, logic, statistics, and linear algebra.</p></article>
    <article class="post-card"><h3><a href="{{ '/literature/' | relative_url }}">Literature</a></h3><p>Interpretation, form, criticism, and human experience.</p></article>
  </div>
</section>

<section class="section">
  <p class="eyebrow">Featured Books</p>
  <div class="card-grid">
    {% for item in site.data.books.physics limit:1 %}
      <article class="post-card"><h3>{{ item.title }}</h3><p>{{ item.author }}</p><p>{{ item.summary }}</p></article>
    {% endfor %}
    {% for item in site.data.books.philosophy limit:1 %}
      <article class="post-card"><h3>{{ item.title }}</h3><p>{{ item.author }}</p><p>{{ item.summary }}</p></article>
    {% endfor %}
    {% for item in site.data.books.literature limit:1 %}
      <article class="post-card"><h3>{{ item.title }}</h3><p>{{ item.author }}</p><p>{{ item.summary }}</p></article>
    {% endfor %}
  </div>
</section>

<section class="section">
  {% assign quote = site.data.quotes | first %}
  <p class="eyebrow">Quote of the Week</p>
  <blockquote>
    <p>{{ quote.text }}</p>
    <cite>{{ quote.author }}</cite>
  </blockquote>
</section>

<section class="section">
  <p class="eyebrow">Newsletter</p>
  <p>Newsletter support is reserved for a future static integration. No cookies, trackers, or paid services are used.</p>
</section>
