<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Text extends _Widget {

	const TYPE = "text";

	private $rows = 1;
	private $help = "";

	public static function build( string $key, string $label, string $defaultValue = "" ) {
		return new static($key, $label, static::TYPE, $defaultValue);
	}

	public function rows(int $rows){
		$this->rows = $rows;
		return $this;
	}

	public function help(string $help){
		$this->help = $help;
		return $this;
	}

	public function toArray() {
		$arr = parent::toArray();
		$arr["rows"] = $this->rows;
		$arr["help"] = $this->help;
		return $arr;
	}

}