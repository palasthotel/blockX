<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


abstract class _Widget implements _IWidget {

	private $key;
	private $label;
	private $type;
	private $defaultValue;

	/**
	 * _Item constructor.
	 *
	 * @param string $key
	 * @param string $label
	 * @param string $type
	 * @param mixed $defaultValue
	 */
	public function __construct( string $key, string $label, string $type, $defaultValue ) {
		$this->key   = $key;
		$this->label = $label;
		$this->type  = $type;
		$this->setDefaultValue( $defaultValue );
	}

	public function key(): string {
		return $this->key;
	}

	public function label(): string {
		return $this->label;
	}

	public function setLabel( string $label ): _Widget {
		$this->label = $label;

		return $this;
	}

	public function type(): string {
		return $this->type;
	}

	public function defaultValue() {
		return $this->defaultValue;
	}

	/**
	 * @param $defaultValue
	 *
	 * @return $this
	 */
	public function setDefaultValue( $defaultValue ) {
		$this->defaultValue = $defaultValue;

		return $this;
	}

	public function toArray(): array {
		$args = [
			"key"   => $this->key(),
			"label" => $this->label(),
			"type"  => $this->type(),
		];

		if ( $this->defaultValue() !== null ) {
			$args["defaultValue"] = $this->defaultValue();
		}

		return $args;
	}

	/**
	 * make sure it is typesafe
	 *
	 * @param mixed $value
	 *
	 * @return mixed
	 */
	public function prepareValue( $value ) {
		return $value;
	}

	/**
	 * @param int|string $post_id
	 */
	public function onSavePost( $post_id ) {
	}

	/**
	 * @param int|string $post_id
	 * @param mixed $value
	 */
	public function onSaveInstance( $post_id, $value ) {
	}

	/**
	 * @param int|string $post_id
	 */
	public function onDeletePost( $post_id ) {
	}
}