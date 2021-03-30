<?php

/**
 * @var PostEmbed $this
 * @var PostEmbedContent $content
 * @var array $attributes
 */

use Palasthotel\WordPress\BlockX\Blocks\PostEmbed;
use Palasthotel\WordPress\BlockX\Blocks\PostEmbedContent;

if ( $content->post instanceof WP_Post ) {
	$title   = get_the_title( $content->post );
	$excerpt = get_the_excerpt( $content->post );
	echo "<p><strong>$title</strong><br/>$excerpt</p>";
}