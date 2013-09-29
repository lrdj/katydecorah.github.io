---
layout: default
title: Archive
---
## Categories
{% for category in site.categories %}
### {{ category | first | upcase }} ##
{% for post in category.last %}[{{ post.title }}]({{ post.url }}){% if forloop.last %}{% else %} // {% endif %} {% endfor %}
{% endfor %}

## Tags
{% for tag in site.tags %}
### {{ tag | first | upcase }}
{% for post in tag.last %}[{{ post.title }}]({{ post.url }}){% if forloop.last %}{% else %} // {% endif %}{% endfor %}
{% endfor %}