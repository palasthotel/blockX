<?php

namespace Palasthotel\WordPress\BlockX;

use Palasthotel\WordPress\BlockX\Blocks\_BlockType;
use Palasthotel\WordPress\BlockX\Blocks\Authors;
use Palasthotel\WordPress\BlockX\Blocks\Debug;
use Palasthotel\WordPress\BlockX\Blocks\PostEmbed;
use Palasthotel\WordPress\BlockX\Blocks\Posts;
use Palasthotel\WordPress\BlockX\Components\Component;
use Palasthotel\WordPress\BlockX\ComposedBlocks\_ComposedBlockType;
use Palasthotel\WordPress\BlockX\ComposedBlocks\_IComposedBlockType;
use Palasthotel\WordPress\BlockX\Containers\_ContainerType;
use Palasthotel\WordPress\BlockX\Containers\_IContainerType;
use Palasthotel\WordPress\BlockX\Containers\Container_1D1;
use Palasthotel\WordPress\BlockX\Containers\Container_1D2_1D2;
use Palasthotel\WordPress\BlockX\Containers\Container_1D3_1D3_1D3;
use Palasthotel\WordPress\BlockX\Containers\Container_1D3_2D3;
use Palasthotel\WordPress\BlockX\Containers\Container_2D3_1D3;
use Palasthotel\WordPress\BlockX\Model\Dependencies;
use Palasthotel\WordPress\BlockX\Model\Option;

/**
 */
class Gutenberg extends Component {

	/**
	 * @var _BlockType[]
	 */
	private $blocks = [];

	/**
	 * @var _ContainerType[]
	 */
	private $containers = [];

	/**
	 * @var _ComposedBlockType[]
	 */
	private $composedBlocks = [];

	private $tooLate = false;
	private Dependencies $dependencies;

	public function onCreate() {

		$this->dependencies = new Dependencies();

		// ---------------------------
		// initialize stuff
		// ---------------------------
		add_action( 'init', function () {

			// collect all block and container classes
			do_action( Plugin::ACTION_COLLECT, $this );

			// let blocks register with block/block.json
			$this->tooLate = true;
			foreach ( $this->blocks as $block ) {
				$block->registerBlock();
				foreach( $block->getEditorScripts() as $script){
					$this->dependencies->addHandle($script);
				}
			}

			// register slot block type with slot/block.json
			register_block_type( $this->plugin->path . '/assets/slot' );

			// register container bocks with container/block.json
			foreach ( $this->containers as $container ) {
				$container->registerContainer();
			}

      // register composed blocks with composedBlocks/block.json
			foreach ( $this->composedBlocks as $composedBlock ) {
        $composedBlock->registerComposedBlock();
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

			foreach ($this->getCoreContainerTypes() as $container){
				if(Settings::isCoreContainerEnabled($container)){
					$gutenberg->addContainerType($container);
				}
			}

		}, 0 );

		// ---------------------------
		// enqueue assets
		// ---------------------------
		add_action( 'enqueue_block_editor_assets', function () {

			foreach ( $this->blocks as $block ) {
				if(method_exists($block, 'enqueueEditorAssets')){

					_doing_it_wrong(
						'${'.$block->id().'}->enqueueEditorAssets()',
						'"Please use editorStyles api instead',
						"BlockX 1.4"
					);

					$block->enqueueEditorAssets( $this->dependencies );
				}
			}

			$this->plugin->assets->enqueueGutenberg(
				$this->blocks,
				$this->dependencies,
				$this->getContainerTypes(),
				$this->getComposedBlockTypes(),
			);

		} );
		add_action( 'enqueue_block_assets', function () {
			// frontend and backend
			foreach ( $this->blocks as $block ) {
				if(method_exists($block, 'enqueueAssets')) {

					_doing_it_wrong(
						'${'.$block->id().'}->enqueueAssets()',
						'"Please use styles api instead',
						"BlockX 1.4"
					);

					$block->enqueueAssets();
				}
			}
		} );
	}

	public function getCoreContainerTypes(): array {
		return [
			new Container_1D1(),
			new Container_1D2_1D2(),
			new Container_1D3_1D3_1D3(),
			new Container_1D3_2D3(),
			new Container_2D3_1D3(),
		];
	}

	/**
	 * @return _IContainerType[]
	 */
	public function getContainerTypes(): array{
		return  $this->containers;
	}

	/**
	 * @return _IComposedBlockType[]
	 */
	public function getComposedBlockTypes(): array{
		return  $this->composedBlocks;
	}

	/**
	 * add a block type
	 *
	 * @param _BlockType $block
	 *
	 * @return bool
	 */
	public function addBlockType( _BlockType $block ) {
		if ( $this->tooLate ) {
			error_log( "BlockX: You cannot use addBlockType anymore. Please use blockx_collect action." );

			return false;
		}
		$this->blocks[] = $block;

		return true;
	}

	/**
	 * @param _ContainerType $container
	 *
	 * @return bool
	 */
	public function addContainerType( _ContainerType $container ) {
		if ( $this->tooLate ) {
			error_log( "BlockX: You cannot use addContainerType anymore. Please use blockx_collect action." );

			return false;
		}
		$this->containers[] = $container;

		return true;
	}

	/**
	 * @param _ComposedBlockType $composedBlock
	 *
	 * @return bool
	 */
	public function addComposedBlockType( _ComposedBlockType $composedBlock ) {
		if ( $this->tooLate ) {
			error_log( "BlockX: You cannot use addContainerType anymore. Please use blockx_collect action." );

			return false;
		}
		$this->composedBlocks[] = $composedBlock;

		return true;
	}

	/**
	 * remove block type
	 *
	 * @param string $id
	 *
	 * @return bool
	 */
	public function removeBlockType( string $id ) {
		if ( $this->tooLate ) {
			error_log( "BlockX: You cannot use removeBlockType anymore. Please use blockx_collect action." );

			return false;
		}
		$this->blocks = array_values( array_filter( $this->blocks, function ( $block ) use ( $id ) {
			return ! $block->id()->equals( $id );
		} ) );

		return true;
	}

	/**
	 * remove block type
	 *
	 * @param string $id
	 *
	 * @return bool
	 */
	public function removeContainerType( string $id ) {
		if ( $this->tooLate ) {
			error_log( "BlockX: You cannot use removeContainerType anymore. Please use blockx_collect action." );

			return false;
		}
		$this->containers = array_values( array_filter( $this->containers, function ( $item ) use ( $id ) {
			return ! $item->id()->equals( $id );
		} ) );

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