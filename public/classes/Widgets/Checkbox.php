<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Checkbox extends _Widget {

	const TYPE = "checkbox";

	public function __construct( string $key, string $label, bool $defaultValue = false ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue );
	}
}