<?php

/**
 * Plugin Name: BlockX
 * Plugin URI: https://github.com/palasthotel/blockX
 * Description: Elevate your Gutenberg Block development experience.
 * Version: 1.10.3
 * Author: Palasthotel <rezeption@palasthotel.de> (in person: Edward Bock)
 * Author URI: http://www.palasthotel.de
 * Requires at least: 5.0
 * Tested up to: 6.5.5
 * Requires PHP: 8.1
 * Text Domain: blockx
 * License: http://www.gnu.org/licenses/gpl-2.0.html GPLv2
 * @copyright Palasthotel
 * @package Palasthotel\WordPress\BlockX
 *
 */

namespace Palasthotel\WordPress\BlockX;

require_once dirname( __FILE__ ) . "/vendor/autoload.php";

if(!defined('BLOCKX_DISALLOW_BLOCK_JSON_GENERATION')){
	define('BLOCKX_DISALLOW_BLOCK_JSON_GENERATION', false);
}

class Plugin extends Components\Plugin {

	const DOMAIN = "blockx";

	// ----------------------------------------------------
	// asset handles
	// ----------------------------------------------------
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
	const FILTER_REST_AJAX = "blockx_rest_ajax";
	const ACTION_ASSET_GENERATION_PATHS = "blockx_asset_generation_paths";
	const FILTER_CONTAINER_BREAKPOINT = "blockx_container_breakpoint";
	const FILTER_COMPOSED_BLOCKS_TEMPLATES = "blockx_composed_blocks_templates";
  const FILTER_COMPOSED_BLOCKS_ALLOWED_BLOCKS = "blockx_composed_blocks_allowed_blocks";
  const FILTER_COMPOSED_BLOCKS_ORIENTATION = "blockx_composed_blocks_orientation";
  const FILTER_COMPOSED_BLOCKS_TEMPLATE_LOCK = "blockx_composed_blocks_template_lock";


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
	const OPTION_ENABLED_CORE_CONTAINERS = "blockx_enabled_core_containers";

	// ----------------------------------------------------
	// initialize plugin features
	// ----------------------------------------------------
	public Database $database;
	public REST $rest;
	public Assets $assets;
	public BlockAssetsGenerator $bag;
	public Templates $templates;
	public Gutenberg $gutenberg;
	public PostHooks $postHooks;
	public Settings $settings;
	public Update $update;
	public Headless $headless;


	public function onCreate() {

		/**
		 * load translations
		 */
		$this->loadTextdomain( Plugin::DOMAIN, "languages" );
		$this->database  = new Database();
		$this->rest      = new REST( $this );
		$this->assets    = new Assets( $this );
		$this->bag       = new BlockAssetsGenerator( $this );
		$this->templates = new Templates( $this );
		$this->gutenberg = new Gutenberg( $this );
		$this->postHooks = new PostHooks( $this );
		$this->settings  = new Settings( $this );
		$this->update    = new Update( $this );

		$this->headless = new Headless($this);

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
