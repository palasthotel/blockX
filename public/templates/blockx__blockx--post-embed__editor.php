<?php

/**
 * @var Posts $this
 * @var PostEmbedContent $content
 */

use Palasthotel\WordPress\BlockX\Blocks\PostEmbedContent;
use Palasthotel\WordPress\BlockX\Blocks\Posts;

if( $content->post instanceof WP_Post ) {
	$title = get_the_title($content->post);
	$excerpt = get_the_excerpt($content->post);
	echo "<p><strong>$title</strong><br/>$excerpt</p>";

} else {
	echo "<p>No post found</p>";
}

