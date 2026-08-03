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
	// The title is plain text, the excerpt may legitimately carry post markup -
	// hence esc_html for one and wp_kses_post for the other.
	printf(
		'<p><strong>%s</strong><br/>%s</p>',
		esc_html( $title ),
		wp_kses_post( $excerpt )
	);
}