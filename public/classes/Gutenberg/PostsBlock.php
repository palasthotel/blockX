<?php


namespace Palasthotel\WordPress\BlockX\Gutenberg;

use Palasthotel\WordPress\BlockX\ContentStructure\ContentStructure;
use Palasthotel\WordPress\BlockX\ContentStructure\ListOf;
use Palasthotel\WordPress\BlockX\ContentStructure\Number;
use Palasthotel\WordPress\BlockX\ContentStructure\Select;
use Palasthotel\WordPress\BlockX\ContentStructure\Text;
use Palasthotel\WordPress\BlockX\Gutenberg;
use Palasthotel\WordPress\BlockX\Plugin;

/**
 * @property Gutenberg gutenberg
 */
class PostsBlock extends _Block {

	public function id(): string {
		return Plugin::BLOCK_POSTS;
	}

	public function title(): string {
		return __("Posts", Plugin::DOMAIN);
	}

	public function category(): string {
		return "embed";
	}

	public function registerBlockTypeArgs(): array {
		$args = parent::registerBlockTypeArgs();
		$args["description"] = __("List of posts", Plugin::DOMAIN);
		$args["icon"] = "list-view";
		$args["supports"] = [
			"align" => true,
            "customClassName" => true,
		];
		return $args;
	}

	public function contentStructure(): ContentStructure {
		return new ContentStructure([
			new Number("number_of_posts", "Number of Posts"),
			new Number("offset", "Skip first x posts"),
			new ListOf("taxonomies", "Taxonomies", [
				new Select("taxonomy", "Taxonomy"),
			])
		]);
	}




}