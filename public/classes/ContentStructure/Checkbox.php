<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


class Checkbox extends _Item {

	const TYPE = "checkbox";

	public function __construct( string $key, string $label, bool $defaultValue = false ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue );
	}
}