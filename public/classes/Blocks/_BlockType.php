<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Model\BlockInstance;
use Palasthotel\WordPress\BlockX\Model\Dependencies;
use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Widgets\Panel;
use stdClass;

abstract class _BlockType implements _IBlockType {

	/**
	 * @return bool
	 */
	function isEditor(){
		return defined( 'REST_REQUEST' ) && REST_REQUEST == true;
	}

	function enqueueEditorAssets(Dependencies $dependencies){}
	function enqueueAssets(){}

	public function registerBlock(){
		register_block_type( (string) $this->id(), array(
			'attributes'      => array(
				'content' => array(
					'type' => 'object',
				),
			),
			'render_callback' => array( $this, 'build' )
		));
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
	function prepare( stdClass $content): stdClass{

		foreach ($this->contentStructure()->getItems() as $widget){

			if($widget instanceof Panel){
				foreach($widget->getItems() as $_widget) {
					$key = $_widget->key();
					$defaultValue = $_widget->defaultValue();
					if(!isset($content->{$key})){
						$content->{$key} = $defaultValue;
					}
				}
				continue;
			}

			$key = $widget->key();
			$defaultValue = $widget->defaultValue();
			if(!isset($content->{$key})){
				$content->{$key} = $defaultValue;
			}

		}

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

	/**
	 * is called on save_post action even if no instance of this block type is in content
	 * @param int $post_id
	 */
	function onSavePost(int $post_id){
		foreach ($this->contentStructure()->getItems() as $widget){
			$widget->onSavePost($post_id);
		}
	}

	/**
	 * is called on save_post action for every block instance in post content
	 *
	 * @param int $post_id
	 * @param BlockInstance $block
	 */
	function onSaveInstance(int $post_id, BlockInstance $block){
		foreach ($this->contentStructure()->getItems() as $widget){
			$value = isset($block->content->{$widget->key()}) ? $block->content->{$widget->key()} : null;
			$widget->onSaveInstance($post_id, $value);
		}
	}

	/**
	 * @param int $post_id
	 */
	function onDeletePost( int $post_id){
		foreach ($this->contentStructure()->getItems() as $widget){
			$widget->onDeletePost($post_id);
		}
	}

}