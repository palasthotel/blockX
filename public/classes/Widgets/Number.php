<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Number extends _Widget {

	const TYPE = "number";

	/**
	 * @var string
	 */
	private $help = "";

	/**
	 * @var null|int
	 */
	private $max = null;
	/**
	 * @var null|int
	 */
	private $min = null;

	public static function build( string $key, string $label, int $defaultValue = 0 ): Number {
		return new Number( $key, $label, static::TYPE, $defaultValue );
	}

	public function max(int $value): Number{
		$this->max = $value;

		return $this;
	}

	public function min(int $value): Number{
		$this->min = $value;

		return $this;
	}

	public function help( string $help ): Number {
		$this->help = $help;

		return $this;
	}

	public function toArray(): array {

		$arr         = parent::toArray();
		$arr["max"] = $this->max;
		$arr["min"] = $this->min;
		$arr["help"] = $this->help;

		return $arr;
	}

}