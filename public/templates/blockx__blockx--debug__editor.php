<?php

/**
 * @var Debug $this
 * @var object $content
 */

use Palasthotel\WordPress\BlockX\Blocks\Debug;

echo "<div style='border: 1px solid #FFC107; padding: 10px;'>";
	echo "<div>For <strong>debug</strong> purpose only. No frontend output.</div>";

	echo "<code>";
	echo nl2br(json_encode($content, JSON_PRETTY_PRINT));
	echo "</code>";
echo "</div>";
