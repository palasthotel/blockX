<?php


namespace Palasthotel\WordPress\BlockX\Gutenberg;

use Palasthotel\WordPress\BlockX\ContentStructure\ContentStructure;
use Palasthotel\WordPress\BlockX\ContentStructure\ListOf;
use Palasthotel\WordPress\BlockX\ContentStructure\Number;
use Palasthotel\WordPress\BlockX\ContentStructure\Select;
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
			new Number("number_of_posts", "Number of Posts", 5),
			new Number("offset", "Offset", 0),
			new ListOf("taxonomies", "Taxonomies", [
				new Select("taxonomy", "Taxonomy"),
			])
			// post type
			// date?
		]);
	}

	public function build($attributes, $content) {
		$attributes = $attributes["content"];

		// collect args
		// build query
		// include templates (frontend / editor)

		$args = [
			"posts_per_page" => isset($attributes["number_of_posts"]) ? intval($attributes["number_of_posts"]): 5,
			"post_type" => "any",
		];
		$query = new \WP_Query($args);

		if($this->isEditor()){
			ob_start();
			echo "<prev>";
			print_r(array_map(function($post){
				return $post->post_title;
			},$query->get_posts()));
			echo "</prev>";
			$val = ob_get_contents();
			ob_end_clean();
			return $val;
		}
		return "Render Public content";
	}

}