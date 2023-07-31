<?php


namespace Palasthotel\WordPress\BlockX\Components;

use wpdb;

/**
 * @version 0.1.1
 */
abstract class Database {

	public wpdb $wpdb;

	public function __construct() {
		global $wpdb;
		$this->wpdb = $wpdb;
		$this->init();
	}

	/**
	 * initialize table names and other properties
	 */
	abstract function init();

	public function createTables(){
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	}
}
