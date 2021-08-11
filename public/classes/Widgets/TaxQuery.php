<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


use Palasthotel\WordPress\BlockX\Model\Option;
use WP_Taxonomy;

class TaxQuery extends _Widget {

	const TYPE = "tax_query";

	/**
	 * @var WP_Taxonomy[]
	 */
	private $taxonomies;

	/**
	 * TaxQuery constructor.
	 *
	 * @param string $key
	 * @param string $label
	 * @param WP_Taxonomy[]|string[] $taxonimies
	 * @param array $defaultValue
	 */
	public function __construct( string $key, string $label, array $taxonimies, $defaultValue = [] ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue );
		$this->taxonomies = $taxonimies;
	}

	/**
	 * @param string $key
	 * @param string $label
	 * @param WP_Taxonomy[]|string[] $taxonomies
	 * @param array $defaultValue
	 *
	 * @return TaxQuery
	 */
	public static function build( string $key, string $label, array $taxonomies, array $defaultValue = [] ): TaxQuery {
		return new static( $key, $label, $taxonomies, $defaultValue );
	}

	public function toArray(): array {
		$arr     = parent::toArray();
		$options = [];
		foreach ( $this->taxonomies as $tax ) {
			if ( is_string( $tax ) ) {
				$tax = get_taxonomy( $tax );
			}
			if ( $tax instanceof WP_Taxonomy ) {
				$options[] = Option::build( $tax->name, $tax->label );
			} else {
				error_log( "Could not find taxonomy in widget: " . $this->key() );
			}
		}
		$arr["taxonomies"] = $options;

		return $arr;
	}

	/**
	 * @param array $args
	 *
	 * @return false|array
	 */
	public static function buildWPTaxQuery( array $args ) {

		if ( ! isset( $args["relation"] ) || ! isset( $args["taxonomies"] ) ) {
			return false;
		}
		if ( ! is_array( $args["taxonomies"] ) ) {
			return false;
		}
		$relation   = $args["relation"];
		$taxonomies = $args["taxonomies"];
		if ( count( $taxonomies ) == 0 ) {
			return false;
		}

		$tax_query = [];
		foreach ( $taxonomies as $item ) {
			if ( ! isset( $item["taxonomy"] ) || ! isset( $item["termIds"] ) || ! is_array( $item["termIds"] ) ) {
				continue;
			}
			$taxonomy = $item["taxonomy"];
			$termIds  = $item["termIds"];
			$query    = [
				"taxonomy" => $taxonomy,
				"field"    => "term_id",
				"terms"    => $termIds,
			];
			if ( isset( $item["operator"] ) ) {
				$query["operator"] = $item["operator"];
			}
			$tax_query[] = $query;
		}
		$tax_query['relation'] = $relation;

		return $tax_query;

	}
}