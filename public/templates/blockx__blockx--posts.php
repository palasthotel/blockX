<?php

use Palasthotel\WordPress\BlockX\Blocks\Posts;

/**
 * @var Posts $this
 * @var array $content
 */

$query = new WP_Query($content->args);

while($query->have_posts()){
	$query->the_post();
	echo "<h1>".get_the_title()."</h1>";
}
wp_reset_postdata();