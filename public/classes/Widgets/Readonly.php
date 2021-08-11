<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Readonly extends _Widget {

	const TYPE = "readonly";

	public static function build( string $key, string $label, string $value ): Readonly {
		return new Readonly( $key, $label, static::TYPE, $value );
	}

}