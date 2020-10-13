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
	 * @var StateLabel|null
	 */
	private $help;

	public function __construct( string $key, $label, $defaultValue ) {
		parent::__construct( $key, $label instanceof StateLabel ? $label->off : $label, static::TYPE, $defaultValue );
		if($label instanceof StateLabel){
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
	public static function build(string $key, $label, bool $defaultValue = false ){
		return new self($key, $label, $defaultValue);
	}

	/**
	 * @param StateLabel $help
	 *
	 * @return $this
	 */
	public function setHelp(StateLabel $help){
		$this->help  = $help;
		return $this;
	}

	public function toArray() {
		$arr = parent::toArray();
		if( !empty($this->stateLabel)){
			$arr["label"] = $this->stateLabel->toArray();
		}
		if( !empty($this->help)){
			$arr["help"] = $this->help->toArray();
		}
		return $arr;
	}
}