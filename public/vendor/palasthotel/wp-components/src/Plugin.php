<?php


namespace Palasthotel\WordPress;


use ReflectionException;

/**
 * @property string path
 * @property string url
 * @property string basename
 */
abstract class Plugin {

	/**
	 * @throws ReflectionException
	 */
	public function __construct() {
		$ref            = new \ReflectionClass( get_called_class() );
		$this->path     = plugin_dir_path( $ref->getFileName() );
		$this->url      = plugin_dir_url( $ref->getFileName() );
		$this->basename = plugin_basename( $ref->getFileName() );

		$this->onCreate();

		register_activation_hook( $ref->getFileName(), array( $this, "onActivation" ) );
		register_deactivation_hook( $ref->getFileName(), array( $this, "onDeactivation" ) );

	}

	abstract function onCreate();

	public function onActivation() {
	}

	public function onDeactivation() {
	}

	private static $instance;

	public static function instance() {
		if ( ! self::$instance ) {
			self::$instance = new static();
		}

		return self::$instance;
	}
}