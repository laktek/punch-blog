var _ = require("underscore");
var path = require("path");

var helper_utils = require("punch").Utils.Helper;
var path_utils = require("punch").Utils.Path;
var blog_content_handler = require("punch-blog-content-handler");

var all_posts = [];
var last_modified;

var fetch_content = function(callback) {
	var all_post_permalinks = [];

	blog_content_handler.getAllPosts(function(err, posts_obj, posts_last_modified) {
		if (!err) {
			all_post_permalinks = _.map(posts_obj, function(post){ return post.permalink; });
			last_modified = posts_last_modified;
		}

		// fetch the content for each post
		var fetch_full_post = function() {
			if (all_post_permalinks.length) {
				blog_content_handler.getPost(path.join(all_post_permalinks.shift(), "index"), function(err, post_contents, modified_date) {
					if (!err) {
						all_posts.push(post_contents);
					}

					return fetch_full_post();
				});
			} else {
				return callback();
			}
		};

		return fetch_full_post();

	});
}

var tag_helpers = {

	all_posts: function() {
		return all_posts.reverse();
	},

	last_modified: function() {
		return last_modified;
	}

};

module.exports = {

	directAccess: function(){
		return { "block_helpers": {}, "tag_helpers": {}, "options": {} };
	},

	get: function(basepath, file_extension, options, callback){
		var self = this;

		if (!path_utils.matchPath(basepath, "^/feed$")) {
			return callback(null, {}, {}, null);
		}

		fetch_content(function() {
			return callback(null, { "tag": tag_helpers }, {}, last_modified);
		});
	}

}
