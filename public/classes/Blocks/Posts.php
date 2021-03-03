<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Gutenberg;
use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContentStructure;
use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Widgets\Number;
use Palasthotel\WordPress\BlockX\Widgets\Panel;
use Palasthotel\WordPress\BlockX\Widgets\Select;
use Palasthotel\WordPress\BlockX\Widgets\TaxQuery;
use stdClass;

class Posts extends _BlockType {

	public function id(): BlockId {
		return BlockId::build(Plugin::BLOCKS_NAMESPACE, Plugin::BLOCK_NAME_POSTS);
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

			Number::build("number_of_posts", "Number of Posts", 5),
			Number::build("offset", "Offset", 0),
			Select::build("post_type", "Post Type", Gutenberg::getPostTypeOptions(), "post"),

			Panel::build("Tax Query", new ContentStructure([
				TaxQuery::build(
					"tax_query",
					"",
					Plugin::instance()->assets->getTaxonomies()
				),
			]))->opened(false),

		]);
	}

	/**
	 * @param stdClass $content
	 *
	 * @return stdClass
	 */
	public function prepare( stdClass $content ): stdClass {

		/**
		 * @var PostsContent $content
		 */
		$content = parent::prepare($content);
		// build all query args
		$content->args = [
			"posts_per_page" => isset($content->number_of_posts) ? intval($content->number_of_posts): 5,
			"offset" => isset($content->offset) ? intval($content->offset): 0,
			"post_type" => isset($content->post_type) ? sanitize_text_field($content->post_type): "any",
		];

		$taxQuery = $this->buildTaxQuery($content);
		if($taxQuery){
			$content->args["tax_query"] = $taxQuery;
		}

		return $content;
	}

	/**
	 * @param stdClass $content
	 *
	 * @return false|array
	 */
	private function buildTaxQuery(stdClass $content){

		/**
		 * @var PostsContent $content
		 */

		if(!isset($content->tax_query) || !is_array($content->tax_query)) return false;
		$args = $content->tax_query;

		if(!isset($args["relation"]) || !isset($args["taxonomies"])) return false;
		if(!is_array($args["taxonomies"])) return false;
		$relation = $args["relation"];
		$taxonomies = $args["taxonomies"];
		if(count($taxonomies) == 0) return false;

		$tax_query = [];
		foreach ($taxonomies as $item){
			if(!isset($item["taxonomy"]) || !isset($item["termIds"]) || !is_array($item["termIds"])) continue;
			$taxonomy = $item["taxonomy"];
			$termIds = $item["termIds"];
			$query  = [
				"taxonomy" => $taxonomy,
				"field" => "term_id",
				"terms" => $termIds,
			];
			if(isset($item["operator"])) $query["operator"]  = $item["operator"];
			$tax_query[] = $query;
		}
		$tax_query['relation'] = $relation;

		return $tax_query;

	}

}