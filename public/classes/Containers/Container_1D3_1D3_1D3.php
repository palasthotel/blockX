<?php

namespace Palasthotel\WordPress\BlockX\Containers;

use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Plugin;

class Container_1D3_1D3_1D3 extends _ContainerType {

	public function __construct( ) {
		parent::__construct( static::BREAKPOINT_TABLET_PREVIEW );
	}

	public function id(): BlockId {
		return BlockId::build(Plugin::DOMAIN, "container-1d3-1d3-1d3");
	}

	public function title(): string {
		return __("Three column 1/3 & 1/3 & 1/3", Plugin::DOMAIN);
	}

	public function columns(): array {
		return [1,1,1];
	}

}