<?php

defined( 'ABSPATH' ) || exit;

/**
 * @var Posts $this
 * @var object $content
 * @var array $attributes
 */

use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Blocks\Posts;

$query = new WP_Query( $content->args );

echo "<ul>";
if ( $query->have_posts() ) {
	while ( $query->have_posts() ) {
		$query->the_post();
		echo "<li>" . esc_html( get_the_title() ) . "</li>";
	}
	echo "</ul>";

} else {
	echo "<i>" . esc_html__( "No posts found.", 'blockx' ) . "</i>";
}
wp_reset_postdata();
