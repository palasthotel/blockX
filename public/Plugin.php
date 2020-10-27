<?php

/**
 * Plugin Name: BlockX
 * Plugin URI: https://github.com/palasthotel/blockX
 * Description: Experimental blocks for palasthotel
 * Version: 0.1.0
 * Author: Palasthotel <rezeption@palasthotel.de> (in person: Edward Bock)
 * Author URI: http://www.palasthotel.de
 * Requires at least: 5.0
 * Tested up to: 5.5.1
 * Text Domain: blockx
 * License: http://www.gnu.org/licenses/gpl-2.0.html GPLv2
 * @copyright Copyright (c) 2020, Palasthotel
 * @package Palasthotel\WordPress\BlockX
 *
 */

namespace Palasthotel\WordPress\BlockX;


/**
 * @property string path
 * @property string url
 * @property Assets assets
 * @property Gutenberg gutenberg
 * @property Templates templates
 * @property REST rest
 */
class Plugin {

	const DOMAIN = "blockx";
	const HANDLE_JS_GUTENBERG = "blockx";
	const HANDLE_CSS_GUTENBERG = "blockx";

	// ----------------------------------------------------
	// core blockx
	// ----------------------------------------------------
	const BLOCKS_NAMESPACE = "blockx";
	const BLOCK_NAME_POSTS = "posts";
	const BLOCK_NAME_RSS = "rss";

	// ----------------------------------------------------
	// hooks
	// ----------------------------------------------------
	const ACTION_COLLECT = "blockx_collect";
	const FILTER_ADD_TEMPLATES_PATHS = "blockx_add_templates_paths";

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
	// initialize plugin features
	// ----------------------------------------------------
	private function __construct(){

		/**
		 * load translations
		 */
		load_plugin_textdomain(
			static::DOMAIN,
			false,
			dirname( plugin_basename( __FILE__ ) ) . '/languages'
		);

		$this->path = plugin_dir_path(__FILE__);
		$this->url = plugin_dir_url(__FILE__);

		require_once dirname(__FILE__)."/vendor/autoload.php";

		$this->rest = new REST($this);
		$this->assets = new Assets($this);
		$this->templates = new Templates($this);
		$this->gutenberg = new Gutenberg($this);

	}

	// ----------------------------------------------------
	// singleton instance
	// ----------------------------------------------------
	/**
	 * @var null|Plugin
	 */
	private static $instance = null;
	/**
	 * @return Plugin
	 */
	public static function instance(){
		if(static::$instance == null){
			static::$instance = new static();
		}
		return static::$instance;
	}

}

Plugin::instance();