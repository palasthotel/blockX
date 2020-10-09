<?php


namespace Palasthotel\WordPress\BlockX;


use Palasthotel\WordPress\BlockX\Blocks\_Block;
use Palasthotel\WordPress\BlockX\Blocks\Posts;

class Gutenberg extends _Component {

	/**
	 * @var _Block[]
	 */
	private $blocks = [];

	public function onCreate() {

		$this->collectBlocks();

		add_action('init', function(){
			foreach ($this->blocks as $block){
				$block->registerBlock();
			}
		});
		add_action( 'enqueue_block_editor_assets', function () {
			// backend only
			$this->plugin->assets->enqueueGutenberg($this->blocks);
		} );
		add_action( 'enqueue_block_assets', function () {
			// frontend and backend
			foreach ($this->blocks as $block){
				$block->enqueueAssets();
			}
		} );
	}

	public function collectBlocks(){
		$this->blocks[] = new Posts($this->plugin);
		// TODO: action to collect other blocks
	}

}