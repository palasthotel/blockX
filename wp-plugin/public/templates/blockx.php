<?php

use Palasthotel\WordPress\BlockX\Blocks\_BlockType;
use Palasthotel\WordPress\BlockX\Plugin;

/**
 * @var _BlockType $this
 * @var array $content
 * @var array $attributes
 */
printf(
	esc_html__( "No template found for block '%s'.", 'blockx' ),
	esc_html( (string) $this->id() )
);

// The dump is a development aid. Printing the block's internal structure to every
// visitor of a page with a missing template is not, so it is behind WP_DEBUG.
if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
	echo "<pre>" . esc_html( print_r( $content, true ) ) . "</pre>";
}
