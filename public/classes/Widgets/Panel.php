<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


use Palasthotel\WordPress\BlockX\Model\ContentStructure;

class Panel extends _Widget {

	const TYPE = "panel";

	private $contentStructure;

	public function __construct( string $key, string $label, ContentStructure $contentStructure) {
		parent::__construct( $key, $label, static::TYPE, null );
		$this->contentStructure = $contentStructure;
	}

	public function toArray() {
		$cs = parent::toArray();
		$cs["contentStructure"] = $this->contentStructure->toArray();
		return $cs;
	}
}