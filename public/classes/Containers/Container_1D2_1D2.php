<?php

namespace Palasthotel\WordPress\BlockX\Containers;

use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Plugin;

class Container_1D2_1D2 extends _ContainerType {

	public function __construct( ) {
		parent::__construct( static::BREAKPOINT_TABLET_PREVIEW );
	}

	public function id(): BlockId {
		return BlockId::build(Plugin::DOMAIN, "container-1d2-1d2");
	}

	public function title(): string {
		return __("Two column 1/2 & 1/2", Plugin::DOMAIN);
	}

	public function columns(): array {
		return [1,1];
	}

}