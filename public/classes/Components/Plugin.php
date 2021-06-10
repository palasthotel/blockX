<?php

namespace Palasthotel\WordPress\BlockX\Components;

use ReflectionException;

/**
 * @property string path
 * @property string url
 * @property string basename
 * @since 0.1.1
 */
abstract class Plugin {

	/**
	 * @var TextdomainConfig|null
	 */
	var $textdomainConfig;

	/**
	 * @throws ReflectionException
	 */
	public function __construct() {
		$ref            = new \ReflectionClass( get_called_class() );
		$this->path     = plugin_dir_path( $ref->getFileName() );
		$this->url      = plugin_dir_url( $ref->getFileName() );
		$this->basename = plugin_basename( $ref->getFileName() );

		$this->onCreate();

		if( $this->textdomainConfig instanceof TextdomainConfig){
			add_action('init', function () use ($ref){
				load_plugin_textdomain(
					$this->textdomainConfig->domain,
					false,
					dirname( plugin_basename( $ref->getFileName() ) ) . "/" .$this->textdomainConfig->languages
				);
			});
		}

		register_activation_hook( $ref->getFileName(), array( $this, "onActivation" ) );
		register_deactivation_hook( $ref->getFileName(), array( $this, "onDeactivation" ) );

	}

	abstract function onCreate();

	public function onActivation( $networkWide ) {
		if ( $networkWide ) {
			MultiSite::foreach([$this, 'onSiteActivation']);
		} else {
			$this->onSiteActivation();
		}
	}

	public function onSiteActivation() {

	}

	public function onDeactivation( $networkWide ) {
		if ( $networkWide ) {
			MultiSite::foreach([$this, 'onSiteDeactivation']);
		} else {
			$this->onSiteDeactivation();
		}
	}

	public function onSiteDeactivation() {

	}

	private static $instances = [];

	public static function instance() {
		$class = get_called_class();
		if ( ! isset( self::$instances[ $class ] ) ) {
			self::$instances[ $class ] = new static();
		}

		return self::$instances[ $class ];
	}
}