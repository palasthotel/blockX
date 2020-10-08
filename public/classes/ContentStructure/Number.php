<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


class Number extends _Item {

	const TYPE = "number";

	public function __construct( string $key, string $title ) {
		parent::__construct( $key, $title, static::TYPE );
	}
}