<?php


namespace Palasthotel\WordPress\BlockX;


use Palasthotel\WordPress\BlockX\Blocks\_BlockType;

class Assets extends _Component {

	/**
	 * @param _BlockType[] $blocks
	 */
	function enqueueGutenberg( array $blocks ){
		$info = include $this->plugin->path . "/js/gutenberg/blockx.asset.php";
		wp_enqueue_script(
			Plugin::HANDLE_JS_GUTENBERG,
			$this->plugin->url . "/js/gutenberg/blockx.js",
			$info["dependencies"],
			$info["version"]
		);

		wp_localize_script(
			Plugin::HANDLE_JS_GUTENBERG,
			"BlockX",
			[
				"i18n" => [
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

				// TODO: get from wp-json api
				"taxonomies" => $this->getTaxonomies(),
				"post_types" => $this->getPostTypes(),
			]
		);

	}

	/**
	 * @return array
	 */
	public function getPostTypes(){
		$post_types = array();
		$input      = get_post_types( array('public' => true, 'show_ui' => true), 'objects' );
		foreach ( $input as $post_type => $info ) {
			$post_types[] = array( 'key' => $post_type, 'label' => $info->label );
		}
		return $post_types;
	}

	/**
	 * @return array
	 */
	public function getTaxonomies(){
		$taxonomies = [];
		$taxs  = get_taxonomies(array(
			'public' => true,
		), 'objects');
		foreach ($taxs as $tax) {
			$taxonomies[] = array(
				"label" => $tax->label,
				"description" => $tax->description,
				"name" => $tax->name,
			);
		}
		return $taxonomies;
	}

}