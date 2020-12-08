=== BlockX ===
Contributors: palasthotel, edwardbock
Donate link: http://palasthotel.de/
Tags: gutenberg, block, developer, utils
Requires at least: 5.0
Tested up to: 5.5.3
Stable tag: 1.0.2
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl

Easy developer friendly way to add new gutenberg blocks to your wordpress.

== Description ==

Easy developer friendly way to add new gutenberg blocks to your wordpress.

== Installation ==

1. Upload `blockx.zip` to the `/wp-content/plugins/` directory
1. Extract the Plugin to a `blockx` Folder
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Use core block-X
1. Create new block-x in your custom theme or plugin code

== Frequently Asked Questions ==

= How can I add my own blockX? =

You can find all you need to know here: https://github.com/palasthotel/blockX/blob/master/README.md


== Screenshots ==


== Changelog ==

= 1.0.2 =
* Feature: Bidirectional relation for embedded posts exposed via public function 'blockx_get_embedded_in_post_ids'
* New filter: 'blockx_rest_posts' to change query result of posts query
* Optimization: Custom ServerSideRenderQueue component for ssr rendering of blocks in a single request

= 1.0.1 =
* Feature: Template inheritance
* New Block: Post Embed
* New Block: Authors
* New Widget: Post - Relate a post
* New overridable methods for block types on post_save and post_delete
* New overridable methods for widgets on post_save and post_delete

= 1.0.0 =
* First release

== Upgrade Notice ==


== Arbitrary section ==



