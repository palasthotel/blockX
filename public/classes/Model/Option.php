<?php


namespace Palasthotel\WordPress\BlockX\Model;

class Option {

	public string $value;
	public string $label;

	public function __construct( string $value, string $label ) {
		$this->value = $value;
		$this->label = $label;
	}

	public static function build( $value, $label ) {
		return new static( $value, $label );
	}

}
