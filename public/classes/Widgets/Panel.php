<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


use Palasthotel\WordPress\BlockX\Model\ContentStructure;

class Panel extends _Widget {

	const TYPE = "panel";

	/**
	 * @var ContentStructure
	 */
	private $contentStructure;

	/**
	 * @var boolean
	 */
	private $isOpened;

	/**
	 * Panel constructor.
	 *
	 * @param string $label
	 * @param ContentStructure $contentStructure
	 */
	public function __construct( string $label, ContentStructure $contentStructure ) {
		parent::__construct( "", $label, static::TYPE, null );
		$this->contentStructure = $contentStructure;
		$this->isOpened         = false;
	}

	public static function build( string $label, ContentStructure $contentStructure ) {
		return new static( $label, $contentStructure );
	}

	public function opened( bool $isOpened ) {
		$this->isOpened = $isOpened;

		return $this;
	}

	public function getItems() {
		return $this->contentStructure->getItems();
	}

	public function toArray() {
		$cs                     = parent::toArray();
		$cs["contentStructure"] = $this->contentStructure->toArray();
		$cs["opened"]           = $this->isOpened;

		return $cs;
	}
}