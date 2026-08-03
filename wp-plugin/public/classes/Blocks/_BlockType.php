<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Model\BlockInstance;
use Palasthotel\WordPress\BlockX\Model\Styles;
use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Widgets\Panel;
use stdClass;

abstract class _BlockType implements _IBlockType {


	public function editorScript(): string {
		return Plugin::HANDLE_JS_GUTENBERG;
	}

	public function script(): string {
		return "";
	}

	public function viewScript(): string {
		return "";
	}

	public function editorStyles(): Styles {
		return Styles::build();
	}

	public function styles(): Styles {
		return Styles::build();
	}

	/**
	 * @return string[]
	 */
	public function getEditorScripts(): array {
		return array_filter([$this->editorScript(), $this->script()],function($item){
			return is_string($item);
		});
	}

	public function registerBlock() {
		$bag = Plugin::instance()->bag;
		$bag->createBlockJSONIfNotExists( $this );

		// so they can be enqueued
		$this->editorScript();
		$this->script();
		$this->viewScript();
		$this->editorStyles();
		$this->styles();

		register_block_type( $bag->getBlockJSONFilePath( $this->id() ), array(
			'render_callback' => array( $this, 'build' )
		) );
	}

	/**
	 * arguments for block register javascript call
	 * @return array
	 */
	function registerBlockTypeArgs(): array {
		return [];
	}

	/**
	 * @return bool
	 */
	function isEditor(): bool {

		if ( defined( 'BLOCK_X_IS_EDITOR_SSR' ) && BLOCK_X_IS_EDITOR_SSR == true ) {
			return true;
		}
		if ( isset( $_SERVER ) && isset( $_SERVER["HTTP_BLOCK_X_EDITOR"] ) && "true" == $_SERVER["HTTP_BLOCK_X_EDITOR"] ) {
			return true;
		}
		if ( is_admin() && isset( $_GET["action"] ) && $_GET["action"] === "edit" ) {
			return true;
		}

		return false;
	}

	/**
	 * prepare contents before output gets build
	 *
	 * @param stdClass $content
	 *
	 * @return stdClass
	 */
	function prepare( stdClass $content ): stdClass {

		foreach ( $this->contentStructure()->getItems() as $widget ) {

			if ( $widget instanceof Panel ) {
				foreach ( $widget->contentStructure()->getItems() as $_widget ) {
					$key          = $_widget->key();
					$defaultValue = $_widget->defaultValue();
					if ( ! isset( $content->{$key} ) ) {
						$content->{$key} = $defaultValue;
					} else {
						$content->{$key} = $_widget->prepareValue( $content->{$key} );
					}
				}
				continue;
			}

			$key          = $widget->key();
			$defaultValue = $widget->defaultValue();
			if ( ! isset( $content->{$key} ) ) {
				$content->{$key} = $defaultValue;
			} else {
				$content->{$key} = $widget->prepareValue( $content->{$key} );
			}

		}

		return apply_filters( Plugin::FILTER_PREPARE_CONTENT, $content, $this, clone $content );
	}

	/**
	 * @param array $attributes
	 * @param string $editorContent
	 *
	 * @return string
	 */
	function build( array $attributes, string $editorContent ): string {

		$attributes = apply_filters( Plugin::FILTER_BLOCK_ATTRIBUTES, $attributes, $this, $attributes );
		$content    = $this->prepare( isset( $attributes["content"] ) ? (object) $attributes["content"] : new stdClass() );

		ob_start();
		$template = Plugin::instance()->templates->get_block_template_path( $this, $this->isEditor() );
		if ( false !== $template ) {
			include $template;
		}
		$content = $editorContent . ob_get_contents();
		ob_end_clean();

		return $content;
	}

	/**
	 * is called on save_post action even if no instance of this block type is in content
	 *
	 * @param int $post_id
	 */
	function onSavePost( int $post_id ) {
		foreach ( $this->contentStructure()->getItems() as $widget ) {
			$widget->onSavePost( $post_id );
		}
	}

	/**
	 * is called on save_post action for every block instance in post content
	 *
	 * @param int $post_id
	 * @param BlockInstance $block
	 */
	function onSaveInstance( int $post_id, BlockInstance $block ) {
		foreach ( $this->contentStructure()->getItems() as $widget ) {
			$value = isset( $block->content->{$widget->key()} ) ? $block->content->{$widget->key()} : null;
			$widget->onSaveInstance( $post_id, $value );
		}
	}

	/**
	 * @param int $post_id
	 */
	function onDeletePost( int $post_id ) {
		foreach ( $this->contentStructure()->getItems() as $widget ) {
			$widget->onDeletePost( $post_id );
		}
	}

}
