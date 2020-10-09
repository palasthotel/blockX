<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


class TaxQuery extends _Item {

	const TYPE = "tax_query";

	public function __construct( string $key, string $label, $defaultValue = [] ) {
		parent::__construct( $key, $label, static::TYPE, $defaultValue );
	}
}