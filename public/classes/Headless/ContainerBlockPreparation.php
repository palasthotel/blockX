<?php

namespace Palasthotel\WordPress\BlockX\Headless;

use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\Headless\Interfaces\IBlockPreparation;
use Palasthotel\WordPress\Headless\Model\BlockName;

class ContainerBlockPreparation implements IBlockPreparation {

	private string $dimension;

	public function __construct(string $dimension) {
		$this->dimension = $dimension;
	}

	function blockName(): BlockName {
		return new BlockName(Plugin::DOMAIN, "container-$this->dimension");
	}

	function prepare( array $block ): array {
		$block["attrs"]["dimension"] = $this->dimension;
		unset($block["innerHTML"]);
		unset($block["innerContent"]);
		return $block;
	}
}