<?php


namespace Palasthotel\WordPress\BlockX\Widgets;

use WP_Taxonomy;

class TaxonomyTerm extends _Widget {

	const TYPE = "taxonomy_term";

	private $taxonomy;
	private $multiple;

	/**
	 * TaxonomyTerm constructor.
	 *
	 * @param string $key
	 * @param string $label
	 * @param string|WP_Taxonomy $taxonomy
	 * @param null $defaultValue
	 */
	public function __construct( string $key, string $label, $taxonomy, $defaultValue = null ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue );
		$this->taxonomy = $taxonomy;
		$this->multiple = false;
	}

	/**
	 * @param string $key
	 * @param string $label
	 * @param WP_Taxonomy|string $taxonomy
	 * @param int $defaultValue
	 *
	 * @return $this
	 */
	public static function build( string $key, string $label, $taxonomy, $defaultValue = null ): TaxonomyTerm {
		return new static( $key, $label, $taxonomy, $defaultValue );
	}

	public function multiple( bool $allow ): TaxonomyTerm {
		$this->multiple = $allow;

		return $this;
	}

	public function toArray(): array {
		$arr             = parent::toArray();
		$arr["taxonomy"] = $this->taxonomy instanceof WP_Taxonomy ? $this->taxonomy->name : $this->taxonomy;
		$arr["multiple"] = $this->multiple;

		return $arr;
	}
}