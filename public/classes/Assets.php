<?php


namespace Palasthotel\WordPress\BlockX;


use Palasthotel\WordPress\BlockX\Blocks\_BlockType;
use Palasthotel\WordPress\BlockX\Model\Dependencies;
use WP_Post_Type;
use WP_Taxonomy;

class Assets extends _Component {

	/**
	 * @param _BlockType[] $blocks
	 */
	function enqueueGutenberg( array $blocks, Dependencies $dependencies){
		$info = include $this->plugin->path . "/js/gutenberg/blockx.asset.php";
		wp_enqueue_script(
			Plugin::HANDLE_JS_GUTENBERG,
			$this->plugin->url . "/js/gutenberg/blockx.js",
			array_merge($info["dependencies"], $dependencies->get()),
			$info["version"]
		);

		wp_localize_script(
			Plugin::HANDLE_JS_GUTENBERG,
			"BlockX",
			[
				"i18n" => [
					"btn_apply_changes" => __("Apply changes", Plugin::DOMAIN),
					"term_select_any" => __("– Any –", Plugin::DOMAIN),
					"widget_tax_query" => [
						"btn_add_taxonomy" => _x("Add taxonomy", "tax query widget", Plugin::DOMAIN),
						"btn_delete_taxonomy" => _x("Delete", "tax query widget", Plugin::DOMAIN),
						"label_taxonomy" => _x("Taxonomy", "tax query widget", Plugin::DOMAIN),
						"label_add_terms" => _x("Add terms", "tax query widget", Plugin::DOMAIN),
						"label_operator" => _x("Operator", "tax query widget", Plugin::DOMAIN),
						"toggle_AND_description" => _x("All taxonomy conditions.", "tax query widget", Plugin::DOMAIN),
						"toggle_OR_description" => _x("One of the taxonomy conditions.", "tax query widget", Plugin::DOMAIN),
					]
				],
				"blocks" => array_map(function($block){
					return [
						"id" => (string) $block->id(),
						"category" => $block->category(),
						"title" => $block->title(),
						"registerBlockTypeArgs" => $block->registerBlockTypeArgs(),
						"contentStructure" => $block->contentStructure()->toArray(),
					];
				}, $blocks),
			]
		);
		if(file_exists($this->plugin->path."/js/gutenberg/blockx.css")){
			wp_enqueue_style(
				Plugin::HANDLE_CSS_GUTENBERG,
				$this->plugin->url."/js/gutenberg/blockx.css",
				[],
				filemtime($this->plugin->path."/js/gutenberg/blockx.css")
			);
		}
	}

	/**
	 * @return WP_Post_Type[]
	 */
	public function getPostTypes(){
		return get_post_types( array('public' => true, 'show_ui' => true), 'objects' );
	}

	/**
	 * @return WP_Taxonomy[]
	 */
	public function getTaxonomies(){
		return get_taxonomies(array(
			'public' => true,
		), 'objects');
	}

}