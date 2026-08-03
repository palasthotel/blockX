<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Textarea extends Text {

	const TYPE = "textarea";

	public static function build( string $key, string $label, string $defaultValue = "" ) {
		$text = new static( $key, $label, static::TYPE, $defaultValue );
		$text->rows( 3 );

		return $text;
	}

}