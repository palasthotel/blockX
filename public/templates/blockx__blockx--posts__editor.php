<?php

/**
 * @var Posts $this
 * @var array $content
 */

use Palasthotel\WordPress\BlockX\Blocks\Posts;

$query = new WP_Query($content->args);

echo "<ul>";
while($query->have_posts()){
	$query->the_post();
	echo "<li>".get_the_title()."</li>";
}
echo "</ul>";
wp_reset_postdata();