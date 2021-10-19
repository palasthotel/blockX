<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Readonly extends _Widget {

	const TYPE = "readonly";
	private $help = "";

	public static function build( string $key, string $label, string $value ): Readonly {
		return new Readonly( $key, $label, static::TYPE, $value );
	}

	public function help( string $help ): Readonly {
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