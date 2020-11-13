<?php

namespace Palasthotel\WordPress\BlockX;

use wpdb;

/**
 * @property wpdb wpdb
 * @property string table
 */
class Database {

	public function __construct() {
		global $wpdb;
		$this->wpdb  = $wpdb;
		$this->table = $wpdb->prefix . "blockx_post_embed";
	}

	/**
	 * @param int $embeddedInPostId
	 *
	 * @return int[]
	 */
	public function getRelatedPostIds( int $embeddedInPostId ) {
		return $this->wpdb->get_col(
			$this->wpdb->prepare( "SELECT post_id FROM $this->table WHERE embedded_in_post_id = %d", $embeddedInPostId )
		);
	}

	/**
	 * @param int $embeddedInPostId
	 * @param int $postId
	 *
	 * @return bool|int
	 */
	function addRelation( int $embeddedInPostId, int $postId ) {
		return $this->wpdb->replace(
			$this->table,
			[
				"embedded_in_post_id" => $embeddedInPostId,
				"post_id"             => $postId
			],
			[
				"%d",
				"%d"
			]
		);
	}

	/**
	 * @param int $embeddedInPostId
	 *
	 * @return bool|int
	 */
	function deleteRelations( int $embeddedInPostId ) {
		return $this->wpdb->delete(
			$this->table,
			[
				"embedded_in_post_id" => $embeddedInPostId,
			],
			[ "%d" ]
		);
	}

	/**
	 * create tables if they do not exist
	 */
	function createTable() {
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		\dbDelta( "CREATE TABLE IF NOT EXISTS $this->table
			(
			 id bigint(20) unsigned auto_increment,
			 embedded_in_post_id bigint(20) unsigned NOT NULL,
			 post_id bigint (20) unsigned NOT NULL,
			 primary key (id),
			 unique key unique_relation (embedded_in_post_id, post_id),
			 key (embedded_in_post_id),
			 key (post_id)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;" );
	}

}