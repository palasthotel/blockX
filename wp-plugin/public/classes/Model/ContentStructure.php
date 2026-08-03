<?php


namespace Palasthotel\WordPress\BlockX\Model;

use Palasthotel\WordPress\BlockX\Widgets\_IWidget;

class ContentStructure {
	/**
	 * @var _IWidget[]
	 */
	private array $items;

	/**
	 * ContentStructure constructor.
	 *
	 * @param _IWidget[] $items
	 */
	public function __construct( array $items = [] ) {
		$this->items = $items;
	}

	/**
	 * @return array
	 */
	public function toArray(): array {
		$cs = [];
		foreach ( $this->items as $item ) {
			$cs[] = $item->toArray();
		}

		return $cs;
	}

	/**
	 * @return _IWidget[]
	 */
	public function getItems():array {
		return $this->items;
	}

}
