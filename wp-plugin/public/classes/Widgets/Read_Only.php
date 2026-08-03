<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Read_Only extends _Widget {

	const TYPE = "readonly";
	private $help = "";

	public static function build( string $key, string $label, string $value = "" ): Read_Only {
		return new Read_Only( $key, $label, static::TYPE, $value );
	}

	public function help( string $help ): Read_Only {
		$this->help = $help;

		return $this;
	}

	public function toArray(): array {
		return array_merge(
			parent::toArray(),
			["help" => $this->help]
		);
	}

}