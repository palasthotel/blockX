<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


interface _IWidget {
	public function key(): string;

	public function label(): string;

	public function type(): string;

	public function toArray(): array;
}