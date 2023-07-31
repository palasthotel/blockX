<?php


namespace Palasthotel\WordPress\BlockX\Components;

use Palasthotel\WordPress\BlockX\Plugin;

/**
 * Class Component
 *
 * @package Palasthotel\WordPress
 * @version 0.1.1
 */
abstract class Component {

	public Plugin $plugin;

	/**
	 * _Component constructor.
	 */
	public function __construct(Plugin $plugin) {
		$this->plugin = $plugin;
		$this->onCreate();
	}

	/**
	 * overwrite this method in component implementations
	 */
	public function onCreate(){}
}
