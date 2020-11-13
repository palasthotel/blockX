<?php

/**
 * @var Posts $this
 * @var array $content
 */

use Palasthotel\WordPress\BlockX\Blocks\Posts;

if( $content->post instanceof WP_Post ) {
	echo get_the_title($content->post);
} else {
	echo "No post found";
}

