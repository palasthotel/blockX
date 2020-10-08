<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


class Checkbox extends _Item {

	const TYPE = "checkbox";

	public function __construct( string $key, string $title ) {
		parent::__construct( $key, $title, static::TYPE );
	}
}