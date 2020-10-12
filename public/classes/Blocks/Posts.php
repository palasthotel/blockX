<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Model\Option;
use Palasthotel\WordPress\BlockX\Widgets\ContentStructure;
use Palasthotel\WordPress\BlockX\Widgets\ListOf;
use Palasthotel\WordPress\BlockX\Widgets\Number;
use Palasthotel\WordPress\BlockX\Widgets\Select;
use Palasthotel\WordPress\BlockX\Blocks;
use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Widgets\TaxQuery;
use stdClass;

class Posts extends _BlockType {

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

		$postTypeOptions = [];
		$postTypeOptions[] = new Option("any", __("Any", Plugin::DOMAIN));
		foreach ($this->plugin->assets->getPostTypes() as $postType){
			$postTypeOptions[] = new Option($postType["key"], $postType["label"]);
		}

		$taxonomyOptions = [];
		foreach ($this->plugin->assets->getTaxonomies() as $taxonomy){
			$taxonomyOptions[] = new Option($taxonomy["name"], $taxonomy["label"]);
		}

		return new ContentStructure([

			new Number("number_of_posts", "Number of Posts", 5),
			new Number("offset", "Offset", 0),

			Select::build("post_type", "Post Type", "post")
			      ->setOptions($postTypeOptions),

			TaxQuery::build("tax_query", __("Tax Query", Plugin::DOMAIN))
			        ->useTaxonomies($taxonomyOptions),

			new Number("offset2", "Offset", 0),

			new ListOf("taxonomies", "Taxonomies", [
				new Number("offset", "Offset", 0),
			])
			// post type
			// date?
		]);
	}

	/**
	 * @param stdClass $content
	 *
	 * @return stdClass
	 */
	public function prepare( stdClass $content ) {
		// build all query args
		$content->args = [
			"posts_per_page" => isset($content->number_of_posts) ? intval($content->number_of_posts): 5,
			"offset" => isset($content->offset) ? intval($content->offset): 0,
			"post_type" => isset($content->post_type) ? sanitize_text_field($content->post_type): "any",
		];
		if(isset($content->tax_query) && is_array($content->tax_query)){
			$relation = $content->tax_query["relation"];
			$taxonomies = $content->tax_query["taxonomies"];
			if(is_array($taxonomies)){
				foreach ($taxonomies as $item){
					if(!isset($item["taxonomy"]) || !isset($item["termIds"]) || !is_array($item["termIds"])) continue;
					$taxonomy = $item["taxonomy"];
					$termIds = $item["termIds"];
				}
			}
		}
		return $content;
	}

}