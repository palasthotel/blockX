<?php

use Palasthotel\WordPress\BlockX\Blocks\_Block;

/**
 * @var _Block $this
 * @var array $content
 */

echo "<h1>{$this->id()} Editor</h1>";
echo "<pre>";
print_r($content);
echo "</pre>";
