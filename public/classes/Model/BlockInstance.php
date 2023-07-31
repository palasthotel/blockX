<?php


namespace Palasthotel\WordPress\BlockX\Model;

class BlockInstance {

	public object $content;
	public array $raw;

	public function __construct( array $block ) {
		$this->content = isset( $block["attrs"]["content"] ) ? (object) $block["attrs"]["content"] : new \stdClass();
		$this->raw     = $block;
	}

}
