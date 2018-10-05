---
layout: post
title:  "Revisiting Past Projects"
tags: design CSS content-stratgy 
---

It's always nice to go back in time and look back at your past work, when you were just starting out. By nice, I mean extremely cringe-worthy. I know there are so many things I can improve on, and if I did it again, I would do it right. Although I am overall pleased with the site's design, the knowledge I have learned since then can help me provide a better user experience.

## The Goal

In 2015, I offered to build a site for a local restaurant for some much needed practice. That restaurant is [Skippy's Gyros](http://www.skippysgyros.com/), and they describe themselves as "food for suburban hunger". The brand colors and logotype were already established. My goal was to build a site that made it quick and easy to find essential information about the business, showcase the menu, and represent their philosophy while being aesthetically pleasing.

## Room for Improvement

### Issue #1: Bootstrap
Before I get into this, I will say that Bootstrap has its uses. However, the way I was using it in this project was not one of them. Bootstrap can be great for rapid prototyping and convenient for when deadlines are near. I pretty much only utilized the responsive grid capabilites and the responsive hamburger menu navigation. There are several problems with this.

One, is that it bloated the site. I loaded the full collection of bootstrap stylesheets and javascript files. Although they were minified, it still was completely unnecessary and took up bandwidth.

Flexbox would have been the best tool for the layout. All of the pages were simple section rows all of the way down, and did not require any sort of specific collapsing order. I could have aligned things with a simple property rather than playing with the different Bootstrap classes.

The navbar could have been made using simple JavaScript and CSS, instead of loading in a bunch of scripts that I'd never use. A resource I came across and loved very much was Tania Rascia's [Respoinsive Dropdown Navigation Tutorial](https://www.taniarascia.com/responsive-dropdown-navigation-bar/).

## Issue #2: the Sticky Footer

![Alt text](/images/IMG_2982.PNG "Sticky Footer Misalignment on Mobile")