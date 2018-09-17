---
title: Static Mapbox API for Jekyll posts

coordinates:
  - -73.7236504,43.2294791
locations:
  - Moreau Lake State Park
tags:
  - Jekyll
  - API
image: https://farm6.staticflickr.com/5571/14562967428_1bd555644c_o.png

---

I've done [Static Google Maps Image for Jekyll Posts](/code/2013/09/06/google-maps-images-api-for-jekyll/), [Mapbox for Jekyll Posts](/code/2014/01/26/mapbox-for-jekyll-posts/), but it's time to settle down.

I'm going with the [static Mapbox API](https://www.mapbox.com/developers/api/static/).

## Front matter

The front matter of this post, supplies `locations` and `coordinates`.

{% highlight yaml %}
coordinates:

- -73.7236504,43.2294791
  locations: Moreau Lake State Park
  {% endhighlight %}

As it stands, the `locations` variable doesn't help generate the static map. The Mapbox API accepts coordinates, but I want to keep the locations as a label and for future flexibility.

Zoom is also available as a front matter variable, but I set a default of 15, which generally works for most of my maps.

## Generating the map

I updated my map include to generate the static map:

{% highlight html %}
{% raw %}
{% if page.coordinates %}

  <div class="post-map-header">
  	<div style="background-image:url(http://api.tiles.mapbox.com/v4/{{ site.mapid }}/{% for coordinate in page.coordinates limit:1 %}{{ coordinate }}{% endfor %},{% if page.zoom %}{{ page.zoom }}{% else %}15{% endif %}/1280x300.png?access_token={{ site.mapbox-token }})" class="post-location-image"></div>
  </div>
{% endif %}
{% endraw %}
{% endhighlight %}

I placed my public api token and mapid in my config file, so that I can quickly edit those items when necessary.

Now a static Mapbox map will generate when I create a post that has coordinates defined in the front matter.

## Styling on Mapbox

To style the map, I opened it up on the Mapbox site. I started with one the preset styles. I changed the terrain color to the background color of my site. Next, I adjusted the alpha of the streets, buildings, areas, and water to about 50%. This lightened up the map without me needing to do so in CSS.

Some of the maps have a very cool effect, such as the map I used for this post (as see in my [Palmertown Mountain Range](/adventures/2013/08/24/palmertown-mountain-range/) post). I'm really digging it.

I updated the front matter on _all_ my map-having posts with coordinates. Now this entire site runs on the static Mapbox API. Also, I upgraded to Mapbox v4 and the quality is amazing!
