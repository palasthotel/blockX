<?php

use Palasthotel\WordPress\BlockX\Plugin;

function blockx_plugin() {
	return Plugin::instance();
}

/**
 * get all post ids that are embedded in this post id
 *
 * @param $post_id
 *
 * @return int[]
 */
function blockx_get_embedded_post_ids( $post_id ) {
	return blockx_plugin()->database->getEmbeddedPostIds( $post_id );
}

/**
 * get all post ids where this post id is embedded in
 *
 * @param $post_id
 *
 * @return int[]
 */
function blockx_get_embedded_in_post_ids( $post_id ) {
	return blockx_plugin()->database->getEmbeddedInPostIds( $post_id );
}