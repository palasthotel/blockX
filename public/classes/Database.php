<?php

namespace Palasthotel\WordPress\BlockX;

class Database extends Components\Database {

	private string $table;

	public function init() {
		$this->table = $this->wpdb->prefix . "blockx_post_embed";
	}

	/**
	 * get all post ids that are embedded in this post id
	 *
	 * @param int|string $inPostId
	 *
	 * @return int[]
	 */
	public function getEmbeddedPostIds( $inPostId ) {
		return $this->wpdb->get_col(
			$this->wpdb->prepare( "SELECT post_id FROM $this->table WHERE embedded_in_post_id = %d", $inPostId )
		);
	}

	/**
	 * get all post ids where this post id is embedded in
	 *
	 * @param int|string $embeddedPostId
	 *
	 * @return array
	 */
	public function getEmbeddedInPostIds( $embeddedPostId ) {
		return $this->wpdb->get_col(
			$this->wpdb->prepare( "SELECT embedded_in_post_id FROM $this->table WHERE post_id = %d", $embeddedPostId )
		);
	}

	/**
	 * @param int|string $embeddedInPostId
	 * @param int|string $postId
	 *
	 * @return bool|int
	 */
	function addRelation( $embeddedInPostId, $postId ) {
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
	 * @param int|string $embeddedInPostId
	 *
	 * @return bool|int
	 */
	function deleteRelations( $embeddedInPostId ) {
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
	function createTables() {
		parent::createTables();
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
