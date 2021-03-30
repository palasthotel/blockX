<?php

use Palasthotel\WordPress\BlockX\Blocks\_BlockType;
use Palasthotel\WordPress\BlockX\Plugin;

/**
 * @var _BlockType $this
 * @var array $content
 * @var array $attributes
 */
printf( __( "No template found for block '%s'.", Plugin::DOMAIN ), $this->id() );
echo "<pre>";
print_r( $content );
echo "</pre>";
