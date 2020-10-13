<?php


namespace Palasthotel\WordPress\BlockX;

use Palasthotel\WordPress\BlockX\Blocks\_BlockType;
use Palasthotel\WordPress\BlockX\Blocks\Debug;
use Palasthotel\WordPress\BlockX\Blocks\Posts;
use Palasthotel\WordPress\BlockX\Model\Option;

class Gutenberg extends _Component {

	/**
	 * @var _BlockType[]
	 */
	private $blocks = [];

	public function onCreate() {

		// ---------------------------
		// initialize stuff
		// ---------------------------
		add_action('init', function(){
			// collect all block classes
			do_action(Plugin::ACTION_COLLECT, $this);
			// let blocks register
			foreach ($this->blocks as $block){
				$block->registerBlock();
			}
		});

		// ---------------------------
		// collect core blocks
		// ---------------------------
		add_action(Plugin::ACTION_COLLECT, function($gutenberg){
			/**
			 * @var Gutenberg $gutenberg
			 */
			$gutenberg->addBlockType(new Posts());
			if(WP_DEBUG){
				$gutenberg->addBlockType(new Debug());
			}
		});

		// ---------------------------
		// enqueue assets
		// ---------------------------
		add_action( 'enqueue_block_editor_assets', function () {
			// backend only
			$this->plugin->assets->enqueueGutenberg($this->blocks);
			foreach ($this->blocks as $block){
				$block->enqueueEditorAssets();
			}
		} );
		add_action( 'enqueue_block_assets', function () {
			// frontend and backend
			foreach ($this->blocks as $block){
				$block->enqueueAssets();
			}
		} );
	}

	/**
	 * add a block type
	 *
	 * @param _BlockType $block
	 */
	public function addBlockType( _BlockType $block){
		$this->blocks[] = $block;
	}

	/**
	 * @return Option[]
	 */
	public static function getTaxonomyOptions(): array{
		$taxonomyOptions = [];
		foreach (Plugin::instance()->assets->getTaxonomies() as $taxonomy){
			$taxonomyOptions[] = Option::build($taxonomy->name, $taxonomy->label);
		}
		return $taxonomyOptions;
	}

	/**
	 * @return Option[]
	 */
	public static function getPostTypeOptions(): array{
		$postTypeOptions = [];
		$postTypeOptions[] = Option::build("any", __("Any", Plugin::DOMAIN));
		foreach (Plugin::instance()->assets->getPostTypes() as $postType){
			$postTypeOptions[] = Option::build($postType->name, $postType->label);
		}
		return $postTypeOptions;
	}

}