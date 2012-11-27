# Punch Blog

A boilerplate to create personal blogs based on [Punch](http://laktek.github.com/punch).

## Features

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

## How to use

* [Download](https://github.com/laktek/punch-blog/archive/master.zip) & extract the code.

* Inside the project's root directory, run `npm install`.

* Set the details of the blog in `contents/shared.json`.

* Open `config.json` and change the settings as you prefer.

* Then go inside `posts` directory and edit the file `1970-01-01-lets-start.markdown`.

* Once you have created your first post, to preview it run `punch s` and point the browser to `http://localhost:9009`. 

* When you are happy with the outcome, publish your blog by running `punch p`.

## License

Copyright (c) 2012 Lakshan Perera
Licensed under the MIT license.
