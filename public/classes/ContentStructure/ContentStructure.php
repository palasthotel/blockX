<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


class ContentStructure {
	/**
	 * @var _Item[]
	 */
	private $items;

	/**
	 * ContentStructure constructor.
	 *
	 * @param _Item[] $items
	 */
	public function __construct( array $items) {
		$this->items = $items;
	}

	/**
	 * @return array
	 */
	public function toArray(){
		$cs = [];
		foreach ($this->items as $item){
			$cs[] = $item->toArray();
		}
		return $cs;
	}

}