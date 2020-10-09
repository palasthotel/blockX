<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


class Select extends _Item {

	const TYPE = "select";

	public function __construct( string $key, string $label, string $defaultValue = "" ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue );
	}
}