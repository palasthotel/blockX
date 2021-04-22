<?php


namespace Palasthotel\WordPress\Taxonomy;


/**
 * @property string[] taxonomies
 * @property callable|null $renderEdit
 * @property callable|null $renderAdd
 * @property callable|null onSave
 */
class TermMetaFieldsConfig {

	public function __construct() {
		$this->taxonomies = ["category"];
	}

	public static function build() {
		return new static();
	}

	public function taxonomies( array $values ): self {
		$this->taxonomies = $values;

		return $this;
	}

	public function add( callable $callable ) {
		$this->renderAdd = $callable;
	}

	public function edit( callable $callable ) {
		$this->renderEdit = $callable;
	}

	public function onSave( callable $callable ): self {
		$this->onSave = $callable;

		return $this;
	}

}