=== BlockX ===
Contributors: palasthotel, edwardbock
Donate link: http://palasthotel.de/
Tags: gutenberg, block, developer, utils
Requires at least: 5.0
Tested up to: 6.5.2
Requires PHP: 8.0
Stable tag: 1.10.2
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl

Easy, php developer friendly way to add new gutenberg blocks to your wordpress.

== Description ==

Easy, php developer friendly way to add new gutenberg blocks to your wordpress.

== Installation ==

1. Upload `blockx.zip` to the `/wp-content/plugins/` directory
1. Extract the Plugin to a `blockx` Folder
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Use core block-X
1. Create new block-x in your custom theme or plugin code

== Frequently Asked Questions ==

= How can I add my own blockX? =

You can find all you need to know in the docs: [https://github.com/palasthotel/blockX/blob/master/README.md](https://github.com/palasthotel/blockX#create-new-block-class)


== Screenshots ==

== Changelog ==

= 1.10.2 =
* Bugfix: Add missing import in Headless.php

= 1.10.1 =
* Bugfix: Regeneration of block.json in some cases incorrectly disabled

= 1.10.0 =
* Feature: Added AutoComplete widget
* Bugfix: Provide default content values in headless response

= 1.9.3 =
* Bugfix: UrlSuggestion provider didn't display label properly
* Optimize: Added list widget controls and list position indicator

= 1.9.2 =
* Bugfix: Wrong access permission - caused an error on installation

= 1.9.1 =
* Optimization: Allow some html tags in info widget
* Refactor: PHP 8.2 fix; remove dynamic properties

= 1.9.0 =
* Feature: ListOf widget can be restricted to min, max and exact number of items

= 1.8.10 =
* Fix: Rest error on autosave 404 if no changes were made.

= 1.8.9 =
* Optimization: force min value in number control widget

= 1.8.8 =
* Fix: problem with autosuggest widget

= 1.8.6 =
* Fix: add missing registerBlockTypeArgs values to block.json files

= 1.8.5 =
* Fix: Support for custom class and anchor block fields

= 1.8.4 =
* Bugfix: Container style generator fix

= 1.8.3 =
* Optimization: Media widget can preview svg now

= 1.8.2 =
* Dependency updates

= 1.8.1 =
* Optimization: Use frontend template in editor if there is no *__editor template file

= 1.8.0 =
* BREAKING CHANGE: moved prepare post to headless plugin. Please update to headless > 1.6.2

= 1.7.1 =
* Bugfix: write permission denied for generator fix

= 1.7.0 =
* Headless plugin integrations
* Bugfix: Do not escape slashes in block.json

= 1.6.2 =
* Fix: empty render blocks problem

= 1.6.1 =
* Fix: Scripts bugfix

= 1.6.0 =
* Feature: Composed blocks
* Feature: you can now use @palasthotel/blockx npm package for a better developer experience

= 1.5.2 =
* Bugfix: Media widget object cache fix

= 1.5.1 =
* Bugfix: Missing content state on first load fix

= 1.5.0 =
* BREAKING CHANGE: renamed Readonly class to Read_Only
* Feature: You can add custom widgets now

= 1.4.0 =
* Optimization: All BlockX blocks are using block.json api

= 1.3.3 =
* Feature: Minimum and maximum restriction for number widget
* UI: Panel and Media widget UI optimization

= 1.3.2 =
* Feature: Help text for ReadonlyWidget

= 1.3.1 =
* Feature: Maximal characters restriction for TextWidget and TextareaWidget

= 1.3.0 =
* Beta Feature: Container blocks

= 1.2.2 =
* Feature: Size restriction options for media widget
* Optimization: preview mode class for desktop, tablet and mobile preview added to block preview
* Optimization: media button has a delete selection button now

= 1.2.1 =
* Security fix: rest route permission callback fix
* New Widget: Info

= 1.2.0 =
* New Widget: User
* New Widget: AutoSuggest
* New Widget: Url
* New Widget: Abstract Ajax

= 1.1.4 =
* Optimization: Provide helper function to build wp query args from TaxQuery widget args.

= 1.1.3 =
* Optimization: always set block attributes, so we can use random defaults that are saved
* Bugfix: property type declaration with php < 7.4 fix

= 1.1.2 =
* Bugfix: Embedded posts in groups were handled as relations

= 1.1.1 =
* Bugfix: Template did not find default templates

= 1.1.0 =
* Feature: You may remove blockx blocks in collect action now

= 1.0.12 =
* Bugfix: Again fixed performance issues with tax query widget and several thousand terms

= 1.0.11 =
* Bugfix: fixed performance issues with tax query widget and several thousand terms
* Bugfix: deep clone list widget changes to avoid reference problems when duplicating a block
* Bugfix: ignore wpml constraints with suppress_filters in wp_query
* Refactoring: Uses wp-components library now

= 1.0.10 =
* Bugfix: missing database table when updating from 1.0.0

= 1.0.9 =
* Bugfix: SSRQ rendering crash when using none latin1 chars
* Refactoring: deprecated registerStore function replaced with createReduxStore and register

= 1.0.8 =
* New Widget: Textarea
* Optimization: you can add a help text to Text widget
* Optimization: Select Widget multiple values
* Bugfix: fixed wrong auto save timeout sanitation

= 1.0.7 =
* New Widget: ListOf
* Optimization: auto save block changes after a specific time

= 1.0.6 =
* New Widget: Media
* Optimization: All block attributes are available in the blockx templates now
* Bugfix: Taxonomies

= 1.0.5 =
* Checkt compatibility with WP5.7
* Bugfix: Posts block was not using taxonomy query

= 1.0.4 =
* New Param: Filter "blockx_rest_posts" got a new $args parameter that holds the query args for the initial wp query

= 1.0.3 =
* New Widget: Divider
* New Widget: Readonly
* Bugfix: Post Widget custom post type title resolution

= 1.0.2 =
* Feature: Bidirectional relation for embedded posts exposed via public function 'blockx_get_embedded_in_post_ids'
* Feature: New widget type Hidden
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

With 1.8.0 there is a breaking change if used with headless plugin.

With 1.5.0 there is a breaking change for blocks that use Readonly widget which was renamed to Read_Only because of php 8.1 token collisions.

With 1.4.0 and newer there were some _BlockType Api changes that should be applied to custom blocks. Please remove the methods $block->enqueueEditorAssets() and $block->enqueueAssets() and use editorStyles() and styles() instead.

== Arbitrary section ==



