<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Widgets\ContentStructure;

interface _IBlockType {

	public function id(): string;
	public function category(): string;
	public function title(): string;
	public function contentStructure(): ContentStructure;

}