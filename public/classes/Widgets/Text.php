<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Text extends _Widget {

	const TYPE = "text";

	public function __construct( string $key, string $label, string $defaultValue ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue );
	}
}