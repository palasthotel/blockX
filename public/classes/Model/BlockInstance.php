<?php


namespace Palasthotel\WordPress\BlockX\Model;


/**
 * @property object content
 * @property array raw
 */
class BlockInstance {

	public function __construct(array $block) {
		$this->content = isset($block["attrs"]["content"]) ? (object) $block["attrs"]["content"]: new \stdClass();
		$this->raw = $block;
	}

}