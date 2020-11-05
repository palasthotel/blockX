<?php


namespace Palasthotel\WordPress\BlockX\Model;


/**
 * @property object content
 * @property array raw
 */
class BlockInstance {

	public function __construct(array $block) {
		$this->content = (object) $block["attrs"]["content"];
		$this->raw = $block;
	}

}