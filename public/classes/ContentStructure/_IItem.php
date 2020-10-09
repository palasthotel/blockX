<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


interface _IItem {
	public function key(): string;
	public function label(): string;
	public function type(): string;
}