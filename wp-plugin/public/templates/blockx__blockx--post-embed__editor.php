<?php

/**
 * @var Posts $this
 * @var PostEmbedContent $content
 * @var array $attributes
 */

use Palasthotel\WordPress\BlockX\Blocks\PostEmbedContent;
use Palasthotel\WordPress\BlockX\Blocks\Posts;
use Palasthotel\WordPress\BlockX\Plugin;

if ( $content->post instanceof WP_Post ) {
	$title   = get_the_title( $content->post );
	$excerpt = get_the_excerpt( $content->post );
	printf(
		'<p><strong>%s</strong><br/>%s</p>',
		esc_html( $title ),
		wp_kses_post( $excerpt )
	);

} else {
	echo "<p>" . esc_html__( "No post found.", 'blockx' ) . "</p>";
}

