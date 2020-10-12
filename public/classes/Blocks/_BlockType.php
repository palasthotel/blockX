<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Plugin;
use stdClass;

abstract class _BlockType implements _IBlockType {

	/**
	 * @return bool
	 */
	function isEditor(){
		return defined( 'REST_REQUEST' ) && REST_REQUEST == true;
	}

	function enqueueEditorAssets(){}
	function enqueueAssets(){}

	public function registerBlock(){
		register_block_type( $this->id(), array(
			'attributes'      => array(
				'content' => array(
					'type' => 'object',
				),
			),
			'render_callback' => array( $this, 'build' )
		) );
	}

	/**
	 * arguments for block register javascript call
	 * @return array
	 */
	function registerBlockTypeArgs(): array{
		return [];
	}

	/**
	 * prepare contents before output gets build
	 *
	 * @param stdClass $content
	 *
	 * @return stdClass
	 */
	function prepare( stdClass $content){
		return $content;
	}

	/**
	 * @param array $attributes
	 * @param string $editorContent
	 *
	 * @return string
	 */
	function build(array $attributes, string $editorContent){

		$content = $this->prepare(isset($attributes["content"]) ? (object) $attributes["content"] : new stdClass());

		ob_start();
		include Plugin::instance()->templates->get_block_template_path($this, $this->isEditor());
		$content = $editorContent.ob_get_contents();
		ob_end_clean();

		return $content;
	}

}