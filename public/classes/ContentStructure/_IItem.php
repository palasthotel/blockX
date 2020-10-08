<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


interface _IItem {
	public function key(): string;
	public function title(): string;
	public function type(): string;
}