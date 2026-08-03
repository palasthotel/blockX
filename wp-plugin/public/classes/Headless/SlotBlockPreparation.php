<?php

namespace Palasthotel\WordPress\BlockX\Headless;

use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\Headless\Interfaces\IBlockPreparation;
use Palasthotel\WordPress\Headless\Model\BlockName;

class SlotBlockPreparation implements IBlockPreparation {

	function blockName(): BlockName {
		return new BlockName(Plugin::DOMAIN, "slot");
	}

	function prepare( array $block ): array {
		unset($block["innerHTML"]);
		unset($block["innerContent"]);
		return $block;
	}
}