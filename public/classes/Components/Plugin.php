<?php

namespace Palasthotel\WordPress\BlockX\Components;

use ReflectionClass;
use ReflectionException;

/**
 * @property string path
 * @property string url
 * @property string basename
 * @version 0.1.2
 */
abstract class Plugin {
	private ReflectionClass $ref;

	private bool $tooLateForTextdomain;
	public string $path;
	public string $url;
	public string $basename;

	/**
	 * @throws ReflectionException
	 */
	public function __construct() {
		$this->ref      = new ReflectionClass( get_called_class() );
		$this->path     = plugin_dir_path( $this->ref->getFileName() );
		$this->url      = plugin_dir_url( $this->ref->getFileName() );
		$this->basename = plugin_basename( $this->ref->getFileName() );

		$this->tooLateForTextdomain = false;
		$this->onCreate();
		$this->tooLateForTextdomain = true;

		register_activation_hook( $this->ref->getFileName(), array( $this, "onActivation" ) );
		register_deactivation_hook( $this->ref->getFileName(), array( $this, "onDeactivation" ) );

	}

	// -----------------------------------------------------------------------------
	// lifecycle methods
	// -----------------------------------------------------------------------------
	abstract function onCreate();

	public function onActivation( $networkWide ) {
		if ( $networkWide ) {
			$this->foreachMultisite( [ $this, 'onSiteActivation' ] );
		} else {
			$this->onSiteActivation();
		}
	}

	public function onSiteActivation() {

	}

	public function onDeactivation( $networkWide ) {
		if ( $networkWide ) {
			$this->foreachMultisite( [ $this, 'onSiteDeactivation' ] );
		} else {
			$this->onSiteDeactivation();
		}
	}

	public function onSiteDeactivation() {

	}

	// -----------------------------------------------------------------------------
	// utility methods
	// -----------------------------------------------------------------------------
	public function loadTextdomain( string $domain, string $relativeLanguagesPath ) {
		if ( $this->tooLateForTextdomain ) {
			error_log( "Too late: You need to setTextdomain in onCreate Method of the Plugin class." );
			return;
		}
		add_action( 'init', function () use ( $domain, $relativeLanguagesPath ) {
			load_plugin_textdomain(
				$domain,
				false,
				dirname( plugin_basename( $this->ref->getFileName() ) ) . "/" . $relativeLanguagesPath
			);
		} );
	}

	public function foreachMultisite(callable $onSite){
		if ( function_exists( 'is_multisite' ) && is_multisite() ) {
			$network_site = get_network()->site_id;
			$args         = array( 'fields' => 'ids' );
			$site_ids     = get_sites( $args );

			// run the activation function for each blog id
			foreach ( $site_ids as $site_id ) {
				switch_to_blog( $site_id );
				$onSite();
			}

			// switch back to the network site
			switch_to_blog( $network_site );
		}
	}

	// -----------------------------------------------------------------------------
	// singleton pattern
	// -----------------------------------------------------------------------------
	private static $instances = [];

	public static function instance() {
		$class = get_called_class();
		if ( ! isset( self::$instances[ $class ] ) ) {
			self::$instances[ $class ] = new static();
		}

		return self::$instances[ $class ];
	}
}
