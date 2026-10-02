<?php

defined( 'ABSPATH' ) || exit;

use Palasthotel\WordPress\BlockX\Blocks\_BlockType;
use Palasthotel\WordPress\BlockX\Plugin;

/**
 * @var _BlockType $this
 * @var object $content
 * @var array $attributes
 */

echo "<div class='blockx__no-template'>";
printf(
	esc_html__( "No editor template found for block '%s'.", 'blockx' ),
	esc_html( (string) $this->id() )
);
// The SSR response is inserted into the editor as HTML, so the dump is escaped.
echo "<pre>" . esc_html( print_r( $content, true ) ) . "</pre>";
echo "</div>";
