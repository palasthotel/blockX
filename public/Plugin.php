<?php

/**
 * Plugin Name: BlockX
 * Plugin URI: https://github.com/palasthotel/blockX
 * Description: Experimental blocks for palasthotel
 * Version: 1.1.3
 * Author: Palasthotel <rezeption@palasthotel.de> (in person: Edward Bock)
 * Author URI: http://www.palasthotel.de
 * Requires at least: 5.0
 * Tested up to: 5.8
 * Text Domain: blockx
 * License: http://www.gnu.org/licenses/gpl-2.0.html GPLv2
 * @copyright Copyright (c) 2021, Palasthotel
 * @package Palasthotel\WordPress\BlockX
 *
 */

namespace Palasthotel\WordPress\BlockX;

require_once dirname( __FILE__ ) . "/vendor/autoload.php";

/**
 * @property string path
 * @property string url
 * @property Assets assets
 * @property Gutenberg gutenberg
 * @property Templates templates
 * @property REST rest
 * @property PostHooks $postHooks
 * @property Database database
 * @property string basename
 * @property Settings settings
 * @property Update update
 */
class Plugin extends Components\Plugin {

	const DOMAIN = "blockx";
	const HANDLE_JS_GUTENBERG = "blockx";
	const HANDLE_CSS_GUTENBERG = "blockx";

	// ----------------------------------------------------
	// core blockx
	// ----------------------------------------------------
	const BLOCKS_NAMESPACE = "blockx";
	const BLOCK_NAME_POSTS = "posts";
	const BLOCK_NAME_POST_EMBED = "post-embed";
	const BLOCK_NAME_AUTHORS = "authors";

	// ----------------------------------------------------
	// hooks
	// ----------------------------------------------------
	const ACTION_COLLECT = "blockx_collect";
	const FILTER_REST_POSTS_QUERY_ARGS = "blockx_rest_posts_query_args";
	const FILTER_REST_POSTS = "blockx_rest_posts";
	const FILTER_ADD_TEMPLATES_PATHS = "blockx_add_templates_paths";
	const FILTER_BLOCK_ATTRIBUTES = "blockx_block_attributes";
	const FILTER_PREPARE_CONTENT = "blockx_prepare_content";


	// ----------------------------------------------------
	// templates
	// ----------------------------------------------------
	const THEME_FOLDER = "plugin-parts";
	const BLOCK_FALLBACK_TEMPLATE = "blockx.php";
	const BLOCK_FALLBACK_EDITOR_TEMPLATE = "blockx__editor.php";
	const TEMPLATE_PLACEHOLDER_NAMESPACE = "%namespace%";
	const TEMPLATE_PLACEHOLDER_NAME = "%name%";
	const BLOCK_TEMPLATE = "blockx__%namespace%--%name%.php";
	const BLOCK_EDITOR_TEMPLATE = "blockx__%namespace%--%name%__editor.php";

	// ----------------------------------------------------
	// options
	// ----------------------------------------------------
	const OPTION_DATA_VERSION = "blockx_data_version";
	const OPTION_AUTO_SAVE_TIMEOUT = "blockx_auto_save_timeout";

	// ----------------------------------------------------
	// initialize plugin features
	// ----------------------------------------------------
	public function onCreate() {

		/**
		 * load translations
		 */
		$this->loadTextdomain(Plugin::DOMAIN, "languages");

		$this->database  = new Database();
		$this->rest      = new REST( $this );
		$this->assets    = new Assets( $this );
		$this->templates = new Templates($this);
		$this->gutenberg = new Gutenberg( $this );
		$this->postHooks = new PostHooks( $this );
		$this->settings  = new Settings( $this );
		$this->update    = new Update( $this );

		if ( WP_DEBUG ) {
			$this->database->createTables();
		}

	}

	/**
	 * on plugin activation
	 */
	function onSiteActivation() {
		parent::onSiteActivation();
		$this->database->createTables();
	}

}

Plugin::instance();

require_once dirname( __FILE__ ) . "/public-functions.php";
