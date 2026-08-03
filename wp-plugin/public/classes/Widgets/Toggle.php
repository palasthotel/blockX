<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


use Palasthotel\WordPress\BlockX\Model\StateLabel;

class Toggle extends _Widget {

	const TYPE = "toggle";

	/**
	 * @var StateLabel|null
	 */
	private $stateLabel;

	/**
	 * @var string|StateLabel|null
	 */
	private $help;

	public function __construct( string $key, $label, $defaultValue = false ) {
		parent::__construct( $key, $label instanceof StateLabel ? $label->off : $label, static::TYPE, $defaultValue );
		if ( $label instanceof StateLabel ) {
			$this->stateLabel = $label;
		}
	}

	/**
	 * @param string $key
	 * @param string|StateLabel $label
	 * @param bool $defaultValue
	 *
	 * @return static
	 */
	public static function build( string $key, $label, bool $defaultValue = false ): Toggle {
		return new self( $key, $label, $defaultValue );
	}

	/**
	 * @param string|StateLabel $help
	 *
	 * @return $this
	 */
	public function help( $help ): Toggle {
		$this->help = $help;

		return $this;
	}

	public function toArray(): array {
		$arr = parent::toArray();
		if ( ! empty( $this->stateLabel ) ) {
			$arr["label"] = $this->stateLabel->toArray();
		}
		if ( $this->help instanceof StateLabel ) {
			$arr["help"] = $this->help->toArray();
		} else if ( ! empty( $this->help ) ) {
			$arr["help"] = $this->help;
		}

		return $arr;
	}

	public function prepareValue( $value ): bool {
		return is_bool( $value ) ? $value : "true" === $value;
	}
}