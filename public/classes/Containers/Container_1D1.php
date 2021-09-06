<?php

namespace Palasthotel\WordPress\BlockX\Containers;

use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Plugin;

class Container_1D1 extends _ContainerType {

	public function id(): BlockId {
		return BlockId::build(Plugin::DOMAIN, "container-1d1");
	}

	public function title(): string {
		return __("Single column", Plugin::DOMAIN);
	}

	public function columns(): array {
		return [1];
	}
}