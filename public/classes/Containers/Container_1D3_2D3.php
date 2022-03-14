<?php

namespace Palasthotel\WordPress\BlockX\Containers;

use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Plugin;

class Container_1D3_2D3 extends _ContainerType {

	public function id(): BlockId {
		return BlockId::build(Plugin::DOMAIN, "container-1d3-2d3");
	}

	public function title(): string {
		return __("Two column 1/3 & 2/3", Plugin::DOMAIN);
	}

	public function columns(): array {
		return [1,2];
	}
}