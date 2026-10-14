<?php

defined( 'ABSPATH' ) || exit;

/**
 * @var Authors $this
 * @var AuthorsContent $content
 * @var array $attributes
 */

use Palasthotel\WordPress\BlockX\Blocks\Authors;
use Palasthotel\WordPress\BlockX\Blocks\AuthorsContent;


echo "<p>";
echo "<strong>Authors: </strong>";
echo esc_html( implode( ", ", array_map( function ( $author ) {
	return $author->displayname;
}, $content->authors ) ) );
echo "</p>";
