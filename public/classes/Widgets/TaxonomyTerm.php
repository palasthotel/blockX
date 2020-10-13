<?php


namespace Palasthotel\WordPress\BlockX\Widgets;

class TaxonomyTerm extends _Widget {

	const TYPE = "taxonomy_term";

	private $taxonomy;
	private $multiple;

	public function __construct( string $key, string $label, string $taxonomies, $defaultValue ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue );
		$this->taxonomy = $taxonomies;
		$this->multiple = false;
	}

	/**
	 * @param string $key
	 * @param string $label
	 * @param string $taxonomy
	 * @param int $defaultValue
	 *
	 * @return $this
	 */
	public static function build(string $key, string $label, string $taxonomy, $defaultValue = 0){
		return new static($key, $label, $taxonomy, $defaultValue);
	}

	/**
	 * @param boolean $allow
	 *
	 * @return $this
	 */
	public function multiple( bool $allow){
		$this->multiple = $allow;
		return $this;
	}

	public function toArray() {
		$arr = parent::toArray();
		$arr["taxonomy"] = $this->taxonomy;
		$arr["multiple"] = $this->multiple;
		return $arr;
	}
}