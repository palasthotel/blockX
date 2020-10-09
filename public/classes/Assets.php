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
				"blocks" => array_map(function($block){
					return [
						"id" => $block->id(),
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