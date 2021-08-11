<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Number extends _Widget {

	const TYPE = "number";

	public static function build( string $key, string $label, int $defaultValue = 0 ): Number {
		return new Number( $key, $label, static::TYPE, $defaultValue );
	}

}