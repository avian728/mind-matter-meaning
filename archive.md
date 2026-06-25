---
title: Archive
subtitle: All articles in chronological order.
permalink: /archive/
---
{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
## {{ year.name }}
{% for post in year.items %}
- [{{ post.title }}]({{ post.url | relative_url }}) · {{ post.date | date: "%B %-d, %Y" }} · {{ post.categories | join: ", " }}
{% endfor %}
{% endfor %}

## Categories
{% for category in site.categories %}
- [{{ category.first | capitalize }}]({{ '/categories/#' | append: category.first | relative_url }}) ({{ category.last.size }})
{% endfor %}

## Tags
{% for tag in site.tags %}
- [{{ tag.first }}]({{ '/tags/#' | append: tag.first | relative_url }}) ({{ tag.last.size }})
{% endfor %}
