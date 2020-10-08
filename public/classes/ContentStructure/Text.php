<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


class Text extends _Item {

	const TYPE = "text";

	public function __construct( string $key, string $title ) {
		parent::__construct( $key, $title, static::TYPE );
	}
}