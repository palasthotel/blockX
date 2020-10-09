<?php


namespace Palasthotel\WordPress\BlockX\Model;


/**
 * @property string $value
 * @property string label
 */
class Option {

	public function __construct(string $value, string $label) {
		$this->value = $value;
		$this->label = $label;
	}

	public static function build($value, $label){
		return new static($value, $label);
	}

}