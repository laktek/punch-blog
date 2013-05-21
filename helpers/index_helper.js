var _ = require("underscore");
var path = require("path");

var helper_utils = require("punch").Utils.Helper;
var path_utils = require("punch").Utils.Path;
var blog_content_handler = require("punch-blog-content-handler");

var homepage_posts = 10;
var teaser_length = 2;
var recent_posts = [];
var last_modified = null;

var fetch_content = function(callback) {
	recent_posts = [];

	//reset posts list
	blog_content_handler.allPosts = {};

	blog_content_handler.getAllPosts(function(err, posts_obj, posts_last_modified) {
		if (!err) {
			var all_posts = _.values(posts_obj).reverse();
			last_modified = posts_last_modified;

			var recent_posts_list = all_posts.slice(all_posts.length - homepage_posts);

			var fetch_full_posts = function() {
				if (recent_posts_list.length) {
					blog_content_handler.getPost(path.join(recent_posts_list.shift().permalink, "index"), function(err, post_contents, modified_date) {
						var post_paras = post_contents.content.replace(/\n/g, " ").match(/(<p[^>]*>.*?<\/p>)/g);
						
						if (teaser_length < 1) {
							paras_to_show = post_paras.length;
						} else {
							paras_to_show = teaser_length;
						}

						post_contents.is_teaser = (paras_to_show < post_paras.length);
						post_contents.content = post_paras.slice(0, paras_to_show).join("");

						if (!err) {
							recent_posts.push(post_contents);
						}

						return fetch_full_posts()

					});
				} else {
					return callback();
				}
			}

			return fetch_full_posts();

		} else {
			console.log(err);
			return callback();
		}
	});
}

var tag_helpers = {

	recent_posts: function() {
		return recent_posts;
	}

};

module.exports = {

	setup: function(config) {
		if (config.blog) {
			teaser_length = config.blog.teaser_length;
			homepage_posts = config.blog.homepage_posts;
		}
	},

	directAccess: function(){
		return { "block_helpers": {}, "tag_helpers": {}, "options": {} };
	},

	get: function(basepath, file_extension, options, callback){
		var self = this;

		if (!path_utils.matchPath(basepath, "^/index$")) {
			return callback(null, {}, {}, null);
		}

		fetch_content(function() {
			return callback(null, { "tag": tag_helpers }, {}, last_modified);
		});
	}

}
