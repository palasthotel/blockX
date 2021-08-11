<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


use Palasthotel\WordPress\BlockX\Model\Option;

class Select extends _Widget {

	const TYPE = "select";

	private $options;

	private $multiple = false;

	/**
	 * Select constructor.
	 *
	 * @param string $key
	 * @param string $label
	 * @param Option[] $options
	 * @param string|string[] $defaultValue
	 */
	public function __construct( string $key, string $label, array $options, $defaultValue = "" ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue );
		$this->options = $options;
	}

	public function multiple(bool $multiple): Select {
		$this->multiple = $multiple;
		return $this;
	}

	/**
	 * @param string $key
	 * @param string $label
	 * @param Option[] $options
	 * @param string|null $defaultValue
	 *
	 * @return static
	 */
	public static function build( string $key, string $label, array $options, $defaultValue = null ): Select {
		return new static( $key, $label, $options, $defaultValue );
	}

	public function toArray(): array {
		$arr            = parent::toArray();
		$arr["options"] = $this->options;
		$arr["multiple"] = $this->multiple;

		return $arr;
	}

}