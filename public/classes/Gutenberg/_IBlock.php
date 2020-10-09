<?php


namespace Palasthotel\WordPress\BlockX\Gutenberg;

use Palasthotel\WordPress\BlockX\ContentStructure\ContentStructure;

interface _IBlock {

	public function id(): string;
	public function category(): string;
	public function title(): string;
	public function contentStructure(): ContentStructure;

}