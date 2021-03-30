<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Hidden extends _Widget {

	const TYPE = "hidden";

	/**
	 * @param string $key
	 * @param mixed $value
	 *
	 * @return Hidden
	 */
	public static function build( string $key, $value ) {
		return new Hidden( $key, "", static::TYPE, $value );
	}

}