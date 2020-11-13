<?php

/**
 * @var PostEmbed $this
 * @var PostEmbedContent $content
 */

use Palasthotel\WordPress\BlockX\Blocks\PostEmbed;
use Palasthotel\WordPress\BlockX\Blocks\PostEmbedContent;

if($content->post instanceof WP_Post){
	$post = $content->post;
	echo "<p>$post->post_title</p>";
}