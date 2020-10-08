<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


class Select extends _Item {

	const TYPE = "select";

	public function __construct( string $key, string $title ) {
		parent::__construct( $key, $title, static::TYPE );
	}
}