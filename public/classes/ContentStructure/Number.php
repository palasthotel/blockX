<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


class Number extends _Item {

	const TYPE = "number";

	public function __construct( string $key, string $label, $defaultValue = 0 ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue);
	}
}