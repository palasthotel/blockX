<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Widgets\ContentStructure;
use Palasthotel\WordPress\BlockX\Widgets\ListOf;
use Palasthotel\WordPress\BlockX\Widgets\Number;
use Palasthotel\WordPress\BlockX\Widgets\Select;
use Palasthotel\WordPress\BlockX\Blocks;
use Palasthotel\WordPress\BlockX\Plugin;

class Posts extends _Block {

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
			new Number("number_of_posts", "Number of Posts", 5),
			new Number("offset", "Offset", 0),
			new ListOf("taxonomies", "Taxonomies", [
				new Select("taxonomy", "Taxonomy"),
			])
			// post type
			// date?
		]);
	}

	public function prepare( array $content ) {
		parent::prepare( $content );

		// build all query args
		$this->content->args = [
			"posts_per_page" => isset($content["number_of_posts"]) ? intval($content["number_of_posts"]): 5,
			"post_type" => "any",
		];

	}

}