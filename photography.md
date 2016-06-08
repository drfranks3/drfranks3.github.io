---
layout: default
title: Photography
permalink: /photography/
---

<div class="container-fluid content-post">
  <h2>Photography</h2>
  <p>They say the sky's the limit—unless, of course, you can <strong>zoom</strong> past it! There's always something new to learn,
  a new technique to master, and a new way of seeing the world, especially through the lens of technology. Below are some of my
  favorite shots. My entire portfolio can be found on <a href="https://www.flickr.com/photos/143893005@N04/">Flickr</a>.</p>
  <div class="container-fluid">
    <div class="row">
      {% for image in site.static_files %}
        {% if image.path contains 'img/thumbs' %}
          <div class="col-md-4">
            <a class="thumbnail {% if image.path contains '*' %}mb-0{% endif %}" href="{{ site.baseurl }}{{ image.path | replace:'thumbs','hi-res'}}">
              <img class="img-responsive" src="{{ site.baseurl}}{{ image.path }}" alt="photo" />
            </a>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>
