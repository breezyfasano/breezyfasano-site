---
layout: post
title:  "Welcome to Jekyll!"
date:   2018-09-11 19:40:02 -0500
tags: JavaScript HTML
---


You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight javascript %}

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('docs/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('docs/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'docs'
        },
    })
})

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('docs/scss/**/*.scss', ['sass']);
    gulp.watch('docs/*.html', browserSync.reload);
    gulp.watch('docs/js/**/*.js', browserSync.reload);
});

{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
