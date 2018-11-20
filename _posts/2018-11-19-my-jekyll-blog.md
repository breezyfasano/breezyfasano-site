---
layout: post
title:  "My Personal Blog & Jekyll"
tags: CMS Jekyll
---

Everywhere I've looked, many have been saying the same thing: "BUILD A BLOG. Document your process. Write things down. You'll learn from it." I'm not the best writer, but hey. Alright. I'll give it a shot. 

I asked myself the question we all dread - **so what tech am I gonna use?**

Buzzwords like Jekyll, Gatsby, and Hugo were all over [/r/webdev](https://www.reddit.com/r/webdev). I had no idea what a static site generator was, much less which one was best to use. I poked around a bit, and determined that Jekyll was probably the best way to go for me - the documentation was clear and detailed, and the learning curve of React/Gatsby didn't sound appealing in my rush to get started. Jekyll uses a templating language called Liquid, and accompanied with Markdown, makes for a pretty powerful CMS.

The first thing you need to do is install Jekyll. Make sure you have the most updated version of Ruby, and run `$ gem install jekyll bundler` in the Terminal. 

Jekyll requires a very precise directory order.  What's great about Jekyll & Bundler is that you can spin up a new site template with ```$ Jekyll new [directory_name_here]```. It includes a default theme, which will be helpful when looking at the different moving parts. The basic template for a project at generation is something like this:

```
_posts
_config.yml
.gitignore
404.html
about.md
Gemfile
Gemfile.lock
index.md
```

From here on, I will discuss Jekyll as it pertains to my personal site. The Jekyll Docs have a great [step-by-step setup tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/) you can view if you want to know more about how it works, and what other features are available.

Right out of the box, Jekyll has some powerful tools available at our disposal. I didn't have to fiddle with Gulp or any other task runners, because Jekyll already auto-compiles Sass and spins up a local development server using the CLI command ``$ jekyll serve``. I'm such a fan of how easy it is to get up and going with this CMS. 

The includes & layout features encouraged me to keep my code as modular as possible. I used 3 includes throughout my site: ```head.html```, ```nav.html```, and ```footer.html```. The first file held the basic HTML heading - the doctype, the ```<head>```, the various meta tags, and the opening ```body``` tag. This saved me a lot of code repetition. The second held my navigation bar, and the ```ul``` including all of my nav items. Finally, ```footer.html``` was... the footer. I also included the closing ```</body>``` tag; I wanted my footer on every page anyway, so I didn't have to remember to close every ```body``` tag in the individual layout files.

So with the main HTML skeleton taken care of, I was able to focus entirely on main content. Now I'll share some fun stuff Jekyll has to offer that helped me build my blog.

## Using Conditionals for Dynamic Navigation

My main goals for this site were documenting my learning process and branding myself into the dev world. So, keeping it simple would be my best bet, for the time being. I only had 2 pages (besides the home page) in mind. I should probably write a bit about who I actually am, and include a page on how to contact me in case any of my *fans* wanted to chitchat. 

However, who knows if I wanted to expand on my site in the future. Maybe I would want to add a portfolio page sometime, with some projects. Maybe a gallery page for my film photography. Maybe a page just for my cat. Alas, I'm lazy. Every time I add a new page, I don't want to add in a new ```<li>``` and edit my navigation file every time I expand. I want to focus on content. So, I discovered the power of **conditionals** and the **front matter**!

I headed on over to the [Liquid Control Flow docs page](https://shopify.github.io/liquid/tags/control-flow/) and checked out what I had at my disposal. Yay! For loops! No problem. I'll generate some ``<li>``s by looping through every page.

{% highlight html %}
{% raw %}
{% for page in site.pages %}
        <li>
        <a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
        </li>
{% endfor %}
{% endraw %}
{% endhighlight %}

The above code basically says: for every single HTML page in my Jekyll site, make a list item with the linked title of the page, and display it in the navigation bar. 

...but, it didn't work. Not like I wanted it to. It literally put **every** page in the main navigation - including the archive pages for each of my tags. It looked something like this:

{% highlight html %}
HOME   ABOUT   CONTACT   HTML   CSS   JAVASCRIPT   CONTENT-STRATEGY   DESIGN
{% endhighlight %}


So on, and so forth. Definitely NOT what I wanted. I read a little more, and found a neat work around.  

{% highlight html %}
{% raw %}
{% for page in site.pages %}
        {% if page.navi %}
        <li>
            <a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a>
        </li>
        {% endif %}
{% endfor %}
{% endraw %}
{% endhighlight %}

The key is this conditional ```if page.navi```. Jekyll allows for custom variables in front matter - anything you want. ```navi``` is one of those custom variables. In the front matter of each page I wanted in the navigation, I set a custom variable ``navi: true``. The code now will only make a ``<li>`` if the  variable is present in the front matter.

Now, any time I create a new page, I can just put in that variable and I'm good to go!

## Yay Plugins!

My first impressions of Jekyll was pretty positive, however, there are a few things missing. One is a decent archiving & tagging system.

I could define a tag variable in front matter, no problem. However, I wanted the tags to be clickable, and when clicked take you to a page that listed all the posts with that respective tag. So, I found a neat plugin called [jekyll-archives](https://github.com/jekyll/jekyll-archives) to do just that. 

All I had to do was include the following in my ``config.yml`` file:  

```
jekyll-archives:
  enabled: all
  layout: archives1
  permalinks:
    year: '/:year/'
    month: '/:year/:month/'
    day: '/:year/:month/:day/'
    tag: '/tags/:name/'
    category: '/category/:name/'
```

I defined a layout for each archive page, and specified the format and styling for which each post would be displayed. After a quick for loop, the plugin did the rest.

Even though ways to search by year, month, day, category, etc exists I'm pretty content with pages just for individual tags. As I write more posts, my plans are to add pagination, additional archive options, and a search feature. Until then, I'll keep writing!

## A Note on Github Pages

It's true that [Jekyll and Github Pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/) are quite a match. However, I chose to deploy my site with [Netlify](https://www.netlify.com/) for a couple of reasons. One is that Github Pages does not support (most) Jekyll plugins - so I couldn't get the archive feature I wanted. I felt that it limited me in a lot of ways.

Netlify also supports [continuous deployment](https://www.netlify.com/blog/2015/10/28/a-step-by-step-guide-jekyll-3.0-on-netlify/) which allowed it to integrate into my Git workflow seamlessly. I didn't have to sacrifice that GitHub benefit. Every time I use ``git push``, Netlify automatically builds a new version of my site. Second, Netlify has an awesome [form submission feature](https://www.netlify.com/docs/form-handling/). All I have to do is add a ``netlify`` attribute to my form HTML, and I can receive submissions, no back end or API required! So, that's dang cool. 

## Conclusion
Jekyll is a great and powerful tool that I'm happy I explored. I know I have only just barely scratched the surface; I've probably also used some things a bit wrong. I'm just excited to see what else it can do, and learn as much as I can. I wouldn't personally use it for a freelance client's website, as it's a bit more developer oriented. However I can see it being great for micro sites, quick static mockups, and a variety of other possibilities.