<?php

namespace Palasthotel\WordPress\BlockX;

use Palasthotel\WordPress\BlockX\Blocks\_BlockType;
use Palasthotel\WordPress\BlockX\Components\Component;
use Palasthotel\WordPress\BlockX\Model\BlockInstance;
use WP_Post;

class PostHooks extends Component {

	public function onCreate() {
		add_action( 'save_post', [ $this, 'save_post' ], 10, 2 );
		add_action( 'delete_post', [ $this, 'delete_post' ] );
	}

	/**
	 * @param int $post_id
	 * @param WP_Post $post
	 */
	public function save_post( int $post_id, WP_Post $post ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}

		if ( isset( $_POST['post_type'] ) && 'page' == $_POST['post_type'] ) {
			if ( ! current_user_can( 'edit_page', $post_id ) ) {
				return;
			}
		} else {
			if ( ! current_user_can( 'edit_post', $post_id ) ) {
				return;
			}
		}

		if ( wp_is_post_revision( $post_id ) ) {
			return;
		}

		/**
		 * get all blocks from content
		 */
		$blocks = parse_blocks( $post->post_content );

		/**
		 * generate BlockX types map and call onSavePost for type
		 */
		$types = $this->plugin->gutenberg->getBlockTypes();
		$map   = [];
		foreach ( $types as $type ) {
			$type->onSavePost( $post_id );
			$map[ (string) $type->id() ] = $type;
		}

		$this->save_blocks($post_id, $blocks, $map);
	}

	/**
	 * @param int|string $post_id
	 * @param array $blocks
	 * @param _BlockType[] $map
	 */
	public function save_blocks($post_id, array $blocks, array $map){
		/**
		 * check all blocks if it is a BlockX type and call onSaveInstance if it is
		 */
		foreach ( $blocks as $block ) {

			if(!is_array($block) || !isset($block["blockName"])) continue;

			$blockName = $block['blockName'];
			if ( isset( $map[ $blockName ] ) ) {
				$type     = $map[ $blockName ];
				$instance = new BlockInstance( $block );
				$type->onSaveInstance( $post_id, $instance );
			} else if( isset($block["innerBlocks"]) && is_array($block["innerBlocks"])){
				$this->save_blocks($post_id, $block["innerBlocks"], $map);
			}
		}
	}

	/**
	 * @param int $post_id
	 */
	public function delete_post( int $post_id ) {
		$types = $this->plugin->gutenberg->getBlockTypes();
		foreach ( $types as $type ) {
			$type->onDeletePost( $post_id );
		}
	}


}