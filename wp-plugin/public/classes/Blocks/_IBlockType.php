<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContentStructure;
use Palasthotel\WordPress\BlockX\Model\Styles;

interface _IBlockType {

	public function id(): BlockId;

	public function category(): string;

	public function title(): string;

	public function registerBlockTypeArgs(): array;

	public function contentStructure(): ContentStructure;

	public function editorScript(): string;

	public function script(): string;

	public function viewScript(): string;

	public function editorStyles(): Styles;

	public function styles(): Styles;

}