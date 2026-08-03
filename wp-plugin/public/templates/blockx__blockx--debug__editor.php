<?php

/**
 * @var Debug $this
 * @var object $content
 * @var array $attributes
 */

use Palasthotel\WordPress\BlockX\Blocks\Debug;

echo "<div style='border: 1px solid #FFC107; padding: 10px;'>";
echo "<div>For <strong>debug</strong> purpose only. No frontend output.</div>";

echo "<div><i>\$content</i></div>";
echo "<code>";
echo nl2br( json_encode( $content, JSON_PRETTY_PRINT ) );
echo "</code>";

$otherAttributes = [];
foreach ( $attributes as $key => $value ) {
	if ( $key === "content" ) {
		continue;
	}
	$otherAttributes[ $key ] = $value;
}

if ( count( $otherAttributes ) ) {
	echo "<div><i>\$attributes !== 'content'</i></div>";
	echo "<code>";
	echo nl2br( json_encode( $otherAttributes, JSON_PRETTY_PRINT ) );
	echo "</code>";
}

echo "</div>";
