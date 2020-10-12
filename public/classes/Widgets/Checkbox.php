<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Checkbox extends _Widget {

	const TYPE = "checkbox";

	public static function build(string $key, string $label, bool $defaultValue = false ){
		return new static($key, $label, static::TYPE, $defaultValue);
	}
}