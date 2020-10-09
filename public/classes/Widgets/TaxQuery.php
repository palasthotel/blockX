<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class TaxQuery extends _Item {

	const TYPE = "tax_query";

	/**
	 * @var string[]
	 */
	private $taxonomies = [];

	public function __construct( string $key, string $label, $defaultValue = [] ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue );
	}

	/**
	 * @param string $key
	 * @param string $label
	 * @param string $defaultValue
	 *
	 * @return TaxQuery
	 */
	public static function build(string $key, string $label, string $defaultValue){
		return new static($key, $label, $defaultValue);
	}

	/**
	 * @param string[] $taxonomies
	 *
	 * @return TaxQuery
	 */
	public function useTaxonomies(array $taxonomies){
		$this->taxonomies = $taxonomies;
		return $this;
	}
}