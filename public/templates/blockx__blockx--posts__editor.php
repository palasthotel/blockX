<?php

/**
 * @var Posts $this
 * @var array $content
 */

use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Blocks\Posts;

$query = new WP_Query($content->args);

echo "<ul>";
if($query->have_posts()){
	while($query->have_posts()){
		$query->the_post();
		echo "<li>".get_the_title()."</li>";
	}
	echo "</ul>";

} else {
	echo "<i>".__("No posts found.", Plugin::DOMAIN)."</i>";
}
wp_reset_postdata();
