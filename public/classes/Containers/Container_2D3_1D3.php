<?php

namespace Palasthotel\WordPress\BlockX\Containers;

use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\Style;
use Palasthotel\WordPress\BlockX\Plugin;

class Container_2D3_1D3 extends _ContainerType {

	public function id(): BlockId {
		return BlockId::build(Plugin::DOMAIN, "container-2d3-1d3");
	}

	public function title(): string {
		return __("Two Column 2/3 & 1/3", Plugin::DOMAIN);
	}

	public function columns(): array {
		return [2,1];
	}

	public function useColumnsInTabletPreview(): bool {
		return true;
	}

}