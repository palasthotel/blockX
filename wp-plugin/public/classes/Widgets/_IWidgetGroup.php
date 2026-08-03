<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


use Palasthotel\WordPress\BlockX\Model\ContentStructure;

interface _IWidgetGroup {
	public function contentStructure(): ContentStructure;
}