--- 
title: Let's Start! 
published: true
tags:
- Punch 
- Blog 
- Life
---

Thanks for trying out Punch blog. You start writing editing this post itself. Just go to `posts/` directory and you will find a file named `1970-01-01-lets-start.markdown`. Rename it with today's date and your post title. Then open it, delete this post and start writing your own.

Before we go any further, here's cute picture of a cat to cheer you up :)

![cat](/img/cat.jpg)

At the top of this file, you will find a YAML front matter block (similar to [Jekyll](https://github.com/mojombo/jekyll)). You can define any variable you want to use in templates. Punch will look for the following variables when generating the site - `title`, `published` and `tags`.

You can set any blog specific settings under the section `blog` in the `config.json`. Default blog settings can be found [here](https://github.com/laktek/punch-blog-content-handler). Apart from the default settings, there are two custom settngs for this project, which define the number of posts (`homepage_posts`) and paragraphs (`teaser_length`) to show in homepage. Here are the default `blog` section from `config.json`.

```javascript
	"blog": {
		"posts_dir": "posts",
		"post_format": "markdown",	
		"post_url": "/{year}/{month}/{date}/{title}",
		"teaser_length": 2,
		"homepage_posts": 10,

		"archive_urls": {
			"all": "/archive",
			"year": "/{year}",
			"year_month": "/{year}/{month}",
			"year_month_date": "/{year}/{month}/{date}",
			"tag": "/tag/{tag}"
		}
	}
```

Punch-blog uses [Prism.js](http://prismjs.com/) for automatic syntax highlighting. There are several other nifty features like that on Punch-blog. Here's a full list: 

* Preview posts, as you write them.
* Easily publish to Amazon S3.
* Pretty URLs for permalinks (no .html, configurable).
* Responsive, customizable theme based on [HTML5Boilerplate](html5boilerplate.com) & [320andup framework](https://github.com/malarkey/320andup/).
* Load fonts from multiple sources with [WebFonts Loader](https://github.com/typekit/webfontloader).
* Easily configure Google Analytics, Tweet button & Disqus comments.
* Highlighting the current page link.
* Post archives by tags.
* Post archives by year, month or date.
* Write posts using GitHub flavored Markdown.
* Client-side code highlighting with Prism.js
* Published/draft states.
* Automatically minifies and bundles JavaScript/CSS.
* RSS feed 
* Sitemap.xml

Also, you can use any other features available in Punch.

* Manage other pages with Punch's default content handler.
* Extend the behavior by writing your own helpers.

This is so sexy and awesome right? Yes, just like the Gangnam style:

<iframe width="560" height="315" src="http://www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allowfullscreen></iframe> 


Happy Blogging!
