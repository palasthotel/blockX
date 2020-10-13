<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Gutenberg;
use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContentStructure;
use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Widgets\ListOf;
use Palasthotel\WordPress\BlockX\Widgets\Number;
use Palasthotel\WordPress\BlockX\Widgets\Select;
use Palasthotel\WordPress\BlockX\Widgets\TaxQuery;
use Palasthotel\WordPress\BlockX\Widgets\Text;
use stdClass;

class RSS extends _BlockType {

	public function id(): BlockId {
		return BlockId::build(Plugin::BLOCKS_NAMESPACE, Plugin::BLOCK_NAME_RSS);
	}

	public function title(): string {
		return __("RSS", Plugin::DOMAIN);
	}

	public function category(): string {
		return "embed";
	}

	public function registerBlockTypeArgs(): array {
		$args = parent::registerBlockTypeArgs();
		$args["description"] = __("RSS feed list", Plugin::DOMAIN);
		$args["icon"] = "list-view";
		$args["supports"] = [
			"align" => true,
            "customClassName" => true,
		];
		return $args;
	}

	public function contentStructure(): ContentStructure {
		return new ContentStructure([
			Text::build("headline", "Headline"),
			Number::build("number_of_items", "Number of Items", 5),
			Number::build("offset", "Offset", 0),
		]);
	}

}