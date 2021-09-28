<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContentStructure;

interface _IBlockType {

	public function id(): BlockId;

	public function category(): string;

	public function title(): string;

	public function registerBlockTypeArgs(): array;

	public function contentStructure(): ContentStructure;

}