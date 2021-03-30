<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Divider extends _Widget {

	const TYPE = "divider";

	/**
	 *
	 * @return Divider
	 */
	public static function build() {
		return new Divider( '', "", static::TYPE, false );
	}

}