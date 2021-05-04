<?php


namespace Palasthotel\WordPress\Model;


/**
 * @property string value
 * @property string label
 */
class Option {

	public function __construct(string $value, string $label = "") {
		$this->value = $value;
		$this->label = empty($label) ? $value : $label;
	}

	public static function build(string $value, string $label = ""){
		return new static($value, $label);
	}
}