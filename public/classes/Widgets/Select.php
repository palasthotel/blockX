<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


use Palasthotel\WordPress\BlockX\Model\Option;

class Select extends _Widget {

	const TYPE = "select";

	private $options;

	/**
	 * Select constructor.
	 *
	 * @param string $key
	 * @param string $label
	 * @param Option[] $options
	 * @param string $defaultValue
	 */
	public function __construct( string $key, string $label, array $options, $defaultValue = "" ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue );
		$this->options = $options;
	}

	/**
	 * @param string $key
	 * @param string $label
	 * @param Option[] $options
	 * @param string|null $defaultValue
	 *
	 * @return static
	 */
	public static function build( string $key, string $label, array $options, $defaultValue = null ) {
		return new static( $key, $label, $options, $defaultValue );
	}

	public function toArray() {
		$arr            = parent::toArray();
		$arr["options"] = $this->options;

		return $arr;
	}

}