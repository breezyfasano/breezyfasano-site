---
layout: post
title:  "Revisiting Skippy's"
tags: design CSS content-stratgy 
---

It's always nice to go back in time and look back at your past work, when you were just starting out. By nice, I mean extremely cringe-worthy. I know there are so many things I can improve on, and if I did it again, I would do it right.

## The Goal

In 2015, I offered to build a site for a local restaurant for some much needed practice. That restaurant is [Skippy's Gyros](http://www.skippysgyros.com/), and they describe themselves as "food for suburban hunger". My goal was to build a site that made it quick and easy to find essential information about the business, showcase the menu, and represent their philosophy while being aesthetically pleasing.

I no longer have access to this code. It was before I knew of the wonders of Git, or cloud storage apparently. However, I will walk you through the top mistakes and issues I had while building this project, and explain what I would do now as to best optimize this design and site architecture.


## Room for Improvement

### Issue #1: Bootstrap
Before I get into this, I will say that Bootstrap has its uses. However, the way I was using it in this project was not one of them. Bootstrap can be great for rapid prototyping and convenient for when deadlines are near. I pretty much only utilized the responsive grid capabilites and the responsive hamburger menu navigation. There are several problems with this.

One, is that it bloated the site. I loaded the full collection of bootstrap stylesheets and javascript files. Although they were minified, it still was completely unnecessary and took up bandwidth.

Flexbox would have been the best tool for the layout. All of the pages were simple section rows all of the way down, and did not require any sort of specific collapsing order. I could have aligned things with a simple property rather than playing with the different Bootstrap classes.

The navbar could have been made using simple JavaScript and CSS, instead of loading in a bunch of scripts that I'd never use. A resource I came across and loved very much was Tania Rascia's [Respoinsive Dropdown Navigation Tutorial](https://www.taniarascia.com/responsive-dropdown-navigation-bar/).

### Issue #2: the Mobile Footer Misalignment

When you do not have enough content to keep your footer at the bottom of the page, some misalignment can occur. On desktop, it aligns fine. However, below you can see the screenshot of what the footer looks like on mobile.

![Alt text](/images/IMG_2982.PNG "Sticky Footer Misalignment on Mobile")

I'm honestly not sure why the footer aligns like this, but my best guess is that it has something to do with the Bootstrap column styles interfering with some bunk mobile styles and specificity issues I implemented. Looking back, I definitely did not understand CSS as much as I thought I did. Specifically, I barely understood Bootstrap.

The way I handle this now is actually extremely simple. It all basically boils down to the code below:

{% highlight sass %}

.content-container {
    min-height: calc(100vh - 20vh);
}

.footer {
    height: 20vh;
}

{% endhighlight %}

In the ```min-height``` property, the ```20vh``` represents the height of the footer. The height of the container before it is calculated by subtracting ```20vh``` from the total height of the viewport. This assures that the footer will be at the bottom of the page, no matter the size of the content in the previous container.


### Issue #3: Lack of Image Optimization

The jumbotron image is HUGE. Extremely huge. *2.7 MB huge.* I didn't know how to properly serve a responsive background image, much less how to optimize images for production. It's 2015! Internet is fast! Everyone has a great connection! Why would I have to worry about something like the main attention-grabbing image loading, when there could be something as small (sarcasm) as a [1% bounce rate increase for every 100ms delay in page load time](https://www.section.io/blog/page-load-time-bounce-rate/)?

Not to mention, the jumobtron image looks like a vague brown rectangle on mobile. I didn't set the image to change between breakpoints - big mistake. You can't tell what it is on some devices, and that's a problem when you're trying to convey a business and their atmosphere.

Since then, I have learned how to optimize images before uploading them and use ```media``` queries to serve the most appropriate version of the image depending on the device.

## A Note on the Design

Overall, I like the design of this site. The color story and typography conveyed the suburban comfort vibe, while keeping it timeless and not overdone. However, I definitely think the content design limits the user experience.

From my own perspective, the main reason I would go to a restaurant's website is to find the most vital information: where it is, the hours, the phone number, and the menu. This information should have been featured better on the home page of the website.  Although the hours and specials have their own section, it is placed below the fold. The address is only placed in the footer of the website. Yes, there is a "location" page, but it is just a Google Map and still requires the user to go clicking around the nav to find it. 

Perhaps the most heinous offense is that there is no call to action. What should the user do when they get to the site? Where should they go next? Skippys' main goal was to increase business and encourage orders, so their should have been a button in the navbar or jumbotron to make it easier for the user to contact the restaurant to place an order.

## Conclusion

I made a lot of mistakes with this one. I've made a lot of mistakes after this one. But it is really something to see just how far I've come. I went from someone who just wanted to make a website that looks super cool and shows off how pretty I can make things, to someone who wants to create a product that can get the user to their goal as quick and painless as possible, and make it look good doing it. My mistakes were invaluable, because I was able to directly see how my decisions affected a customer base.

Although I am overall pleased with the site's design, the knowledge I have learned since then helps me provide a better user experience in my work. I'm excited for my more user-centered and optimized future, and all the mistakes that will come with it.