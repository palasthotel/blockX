<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Number extends _Widget {

	const TYPE = "number";

	public function __construct( string $key, string $label, $defaultValue = 0 ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue);
	}
}