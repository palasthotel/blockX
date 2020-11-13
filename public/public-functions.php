<?php

use Palasthotel\WordPress\BlockX\Plugin;

function blockx_plugin(){
	return Plugin::instance();
}

function blockx_get_embedded_post_ids($post_id){
	return blockx_plugin()->database->getEmbeddedPostIds($post_id);
}