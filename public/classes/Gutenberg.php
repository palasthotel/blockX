<?php


namespace Palasthotel\WordPress\BlockX;

use Palasthotel\WordPress\BlockX\Blocks\_BlockType;
use Palasthotel\WordPress\BlockX\Blocks\Authors;
use Palasthotel\WordPress\BlockX\Blocks\Debug;
use Palasthotel\WordPress\BlockX\Blocks\PostEmbed;
use Palasthotel\WordPress\BlockX\Blocks\Posts;
use Palasthotel\WordPress\BlockX\Components\Component;
use Palasthotel\WordPress\BlockX\Model\Dependencies;
use Palasthotel\WordPress\BlockX\Model\Option;

/**
 * @property Dependencies jsDependencies
 */
class Gutenberg extends Component {

	/**
	 * @var _BlockType[]
	 */
	private $blocks = [];
	private $tooLate = false;

	public function onCreate() {

		$this->jsDependencies = new Dependencies();

		// ---------------------------
		// initialize stuff
		// ---------------------------
		add_action( 'init', function () {
			// collect all block classes
			do_action( Plugin::ACTION_COLLECT, $this );
			// let blocks register
			$this->tooLate = true;
			foreach ( $this->blocks as $block ) {
				$block->registerBlock();
			}
		}, 99 );

		// ---------------------------
		// collect core blocks
		// ---------------------------
		add_action( Plugin::ACTION_COLLECT, function ( Gutenberg $gutenberg ) {

			$gutenberg->addBlockType( new Posts() );
			$gutenberg->addBlockType( new PostEmbed() );
			$gutenberg->addBlockType( new Authors() );

			if ( WP_DEBUG ) {
				$gutenberg->addBlockType( new Debug() );
			}


		}, 0 );

		// ---------------------------
		// enqueue assets
		// ---------------------------
		add_action( 'enqueue_block_editor_assets', function () {
			foreach ( $this->blocks as $block ) {
				$block->enqueueEditorAssets( $this->jsDependencies );
			}
			// backend only
			$this->plugin->assets->enqueueGutenberg( $this->blocks, $this->jsDependencies );
		} );
		add_action( 'enqueue_block_assets', function () {
			// frontend and backend
			foreach ( $this->blocks as $block ) {
				$block->enqueueAssets();
			}
		} );
	}

	/**
	 * add a block type
	 *
	 * @param _BlockType $block
	 *
	 * @return bool
	 */
	public function addBlockType( _BlockType $block ) {
		if($this->tooLate){
			error_log("BlockX: You cannot use addBlockType anymore. Please use blockx_collect action.");
			return false;
		}
		$this->blocks[] = $block;
		return true;
	}

	/**
	 * remove block type
	 *
	 * @param string $id
	 *
	 * @return bool
	 */
	public function removeBlockType( string $id ){
		if($this->tooLate){
			error_log("BlockX: You cannot use addBlockType anymore. Please use blockx_collect action.");
			return false;
		}
		$this->blocks = array_values(array_filter($this->blocks, function($block) use ($id){
			return !$block->id()->equals($id);
		}));
		return true;
	}

	/**
	 * @return _BlockType[]
	 */
	public function getBlockTypes(): array {
		return $this->blocks;
	}

	/**
	 * @param $id
	 *
	 * @return false|_BlockType
	 */
	public function getBlockType( $id ) {
		$blocks  = $this->getBlockTypes();
		$results = array_values( array_filter( $blocks, function ( $blockType ) use ( $id ) {
			return $blockType->id()->equals( $id );
		} ) );

		return count( $results ) === 1 ? $results[0] : false;
	}

	/**
	 * @return Option[]
	 */
	public static function getTaxonomyOptions(): array {
		$taxonomyOptions = [];
		foreach ( Plugin::instance()->assets->getTaxonomies() as $taxonomy ) {
			$taxonomyOptions[] = Option::build( $taxonomy->name, $taxonomy->label );
		}

		return $taxonomyOptions;
	}

	/**
	 * @return Option[]
	 */
	public static function getPostTypeOptions(): array {
		$postTypeOptions   = [];
		$postTypeOptions[] = Option::build( "any", __( "Any", Plugin::DOMAIN ) );
		foreach ( Plugin::instance()->assets->getPostTypes() as $postType ) {
			$postTypeOptions[] = Option::build( $postType->name, $postType->label );
		}

		return $postTypeOptions;
	}


}