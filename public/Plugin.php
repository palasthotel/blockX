<?php

/**
 * Plugin Name: BlockX
 * Plugin URI: http://www.palasthotel.de
 * Description: Experimental blocks for palasthotel
 * Version: 1.0.0
 * Author: Palasthotel <rezeption@palasthotel.de> (in person: Edward Bock)
 * Author URI: http://www.palasthotel.de
 * Requires at least: 5.0
 * Tested up to: 5.5.1
 * Text Domain:       blockx
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
 */
class Plugin {

	const DOMAIN = "blockx";

	const HANDLE_JS_GUTENBERG = "blockx";

	const BLOCK_POSTS = "blockx/posts";

	const ACTION_COLLECT = "blockx_collect";
	const FILTER_ADD_TEMPLATES_PATHS = "blockx_add_templates_paths";

	const THEME_FOLDER = "plugin-parts";

	private function __construct(){
		require_once dirname(__FILE__)."/vendor/autoload.php";

		$this->path = plugin_dir_path(__FILE__);
		$this->url = plugin_dir_url(__FILE__);

		$this->assets = new Assets($this);
		$this->templates = new Templates($this);
		$this->gutenberg = new Gutenberg($this);

	}

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