<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Text extends _Widget {

	const TYPE = "text";

	public static function build( string $key, string $label, string $defaultValue = "" ) {
		return new static($key, $label, static::TYPE, $defaultValue);
	}

}