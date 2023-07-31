<?php


namespace Palasthotel\WordPress\BlockX;


use Palasthotel\WordPress\BlockX\Blocks\_IBlockType;
use Palasthotel\WordPress\BlockX\Containers\_IContainerType;
use Palasthotel\WordPress\BlockX\Model\Dependencies;
use WP_Post_Type;
use WP_Taxonomy;

class Assets extends Components\Component {

	private Components\Assets $helper;

	public function onCreate() {
		parent::onCreate();
		$this->helper = new Components\Assets( $this->plugin );
		add_action('init', [$this, 'init'], 0);
	}

	public function init(){
		$this->helper->registerStyle(
			Plugin::HANDLE_CSS_GUTENBERG,
			"assets/dist/gutenberg.css"
		);
	}

	/**
	 * @param _IBlockType[] $blocks
	 * @param Dependencies $dependencies
	 * @param _IContainerType[] $containers
	 */
	function enqueueGutenberg( array $blocks, Dependencies $dependencies, array $containers, array $composedBlocks ) {

		wp_enqueue_style( Plugin::HANDLE_CSS_GUTENBERG );

		$this->helper->registerScript(
			Plugin::HANDLE_JS_GUTENBERG,
			"assets/dist/gutenberg.js",
			array_filter($dependencies->get(), function($handle){
				return $handle != Plugin::HANDLE_JS_GUTENBERG;
			})
		);
		wp_enqueue_script( Plugin::HANDLE_JS_GUTENBERG );

		wp_localize_script(
			Plugin::HANDLE_JS_GUTENBERG,
			"BlockX",
			[
				"settings" => [
					"auto_save_timeout" => Settings::getAutoSaveTimeout(),
				],
				"i18n"     => [
					"btn_apply_changes" => __( "Apply changes", Plugin::DOMAIN ),
					"term_select_any"   => __( "– Any –", Plugin::DOMAIN ),
					"widget_tax_query"  => [
						"btn_add_taxonomy"       => _x( "Add taxonomy", "tax query widget", Plugin::DOMAIN ),
						"btn_delete_taxonomy"    => _x( "Delete", "tax query widget", Plugin::DOMAIN ),
						"label_taxonomy"         => _x( "Taxonomy", "tax query widget", Plugin::DOMAIN ),
						"label_add_terms"        => _x( "Add terms", "tax query widget", Plugin::DOMAIN ),
						"label_operator"         => _x( "Operator", "tax query widget", Plugin::DOMAIN ),
						"toggle_AND_description" => _x( "All taxonomy conditions.", "tax query widget", Plugin::DOMAIN ),
						"toggle_OR_description"  => _x( "One of the taxonomy conditions.", "tax query widget", Plugin::DOMAIN ),
					],
					"widget_media"      => [
						"no_permission" => _x( 'You do not have permission to use media.', 'media widget', Plugin::DOMAIN ),
						"not_found"     => _x( '❓ Media not found.', 'media widget', Plugin::DOMAIN ),
					],
				],
				"blocks"   => array_map( function ( $block ) {
					return [
						"id"                    => (string) $block->id(),
						"category"              => $block->category(),
						"title"                 => $block->title(),
						"registerBlockTypeArgs" => $block->registerBlockTypeArgs(),
						"contentStructure"      => $block->contentStructure()->toArray(),
					];
				}, $blocks ),
				"containers" => array_map(function ($container){
					return [
						"id" => (string) $container->id(),
						"title" => $container->title(),
						"columns" => $container->columns(),
						"editorStyle" => $container->editorStyles(),
						"style" => $container->styles(),
					];
				}, $containers),
                "composedBlocks" => array_map(function ($composedBlocks){
					return [
						"id" => (string) $composedBlocks->id(),
						"title" => $composedBlocks->title(),
						"editorStyle" => $composedBlocks->editorStyles(),
						"style" => $composedBlocks->styles(),
						"templates" => $composedBlocks->templates(),
						"allowedBlocks" => $composedBlocks->allowedBlocks(),
						"orientation" => $composedBlocks->orientation(),
						"templateLock" => $composedBlocks->templateLock(),
						"category" => $composedBlocks->category(),
						"icon" => $composedBlocks->icon(),

					];
				}, $composedBlocks),
			]
		);

	}

	/**
	 * @return WP_Post_Type[]
	 */
	public function getPostTypes() {
		return get_post_types( array( 'public' => true, 'show_ui' => true ), 'objects' );
	}

	/**
	 * @return WP_Taxonomy[]
	 */
	public function getTaxonomies() {
		return get_taxonomies( array(
			'public' => true,
		), 'objects' );
	}


}
