<?php

namespace Palasthotel\WordPress\BlockX;

use Palasthotel\WordPress\BlockX\Blocks\PostEmbed;
use Palasthotel\WordPress\BlockX\Blocks\Posts;
use Palasthotel\WordPress\BlockX\Components\Component;
use Palasthotel\WordPress\BlockX\Headless\ContainerBlockPreparation;
use Palasthotel\WordPress\BlockX\Headless\SlotBlockPreparation;
use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\Headless\Extensions\FeaturedMedia;
use Palasthotel\WordPress\Headless\Model\BlockPreparations;
use WP_Term;

class Headless extends Component {

	public function onCreate() {
		parent::onCreate();
		add_action( 'plugins_loaded', [ $this, 'plugins_loaded' ] );
	}

	public function plugins_loaded() {
		if ( ! class_exists( 'Palasthotel\WordPress\Headless\Plugin' ) ) {
			return;
		}
		add_action(
			\Palasthotel\WordPress\Headless\Plugin::ACTION_REGISTER_BLOCK_PREPARATION_EXTENSIONS,
			[ $this, 'block_preparation_extensions' ]
		);
		add_filter(
			\Palasthotel\WordPress\Headless\Plugin::FILTER_BLOCKS_PREPARE_BLOCK,
			[ $this, 'prepare_block' ],
			10,
			2
		);

	}

	public function block_preparation_extensions( BlockPreparations $extensions ) {
		$containers = $this->plugin->gutenberg->getContainerTypes();
		foreach ( $containers as $container ) {
			$sum  = array_sum( $container->columns() );
			$type = implode(
				"-",
				array_map( function ( $col ) use ( $sum ) {
					return $col . "d" . $sum;
				}, $container->columns() )
			);
			$container->columns();
			$extensions->add( new ContainerBlockPreparation( $type ) );
		}
		$extensions->add( new SlotBlockPreparation() );
	}

	public function prepare_block( $block, $level ) {

		if ( ! is_string( $block["blockName"] ) ) {
			return $block;
		}

		$nameParts = explode( "/", $block["blockName"] );
		if ( count( $nameParts ) != 2 ) {
			return $block;
		}

		$blockId = BlockId::build( $nameParts[0], $nameParts[1] );
		$blockX  = $this->plugin->gutenberg->getBlockType( $blockId );

		if ( $blockX instanceof Posts || is_subclass_of( $blockX, 'Palasthotel\WordPress\BlockX\Blocks\Posts' ) ) {

			$content        = $block["attrs"]["content"];
			$prepared       = $blockX->prepare( (object) $content );
			$posts          = get_posts( $prepared->args );
			$block["posts"] = [];
			foreach ( $posts as $post ) {
				$block["posts"][] = $this->buildPostTeaser( $post, $level + 1 );
			}
			unset( $block["innerHTML"] );
			unset( $block["innerContent"] );
		} else if ( $blockX instanceof PostEmbed || is_subclass_of( $blockX, 'Palasthotel\WordPress\BlockX\Blocks\PostEmbed' ) ) {
			$content       = $block["attrs"]["content"];
			$prepared      = $blockX->prepare( (object) $content );
			$block["post"] = ( $prepared->post instanceof \WP_Post ) ? $this->buildPostTeaser( $prepared->post, $level + 1 ) : null;
			unset( $block["innerHTML"] );
			unset( $block["innerContent"] );
		}

		return $block;
	}

	private function buildPostTeaser( $id_or_post, $level ) {
		$post       = get_post( $id_or_post );
		$featuredImageId = get_post_thumbnail_id( $post );
		$postJson   = [
			"id"                 => $post->ID,
			"type"               => $post->post_type,
			"title"              => $post->post_title,
			"slug"               => $post->post_name,
			"featured_media"     => $featuredImageId,
			"featured_media_url" => get_the_post_thumbnail_url( $post, "full" ),
			"featured_media_src" => wp_get_attachment_image_src( $featuredImageId, "full" ),
			"featured_media_sizes" => (class_exists("Palasthotel\WordPress\Headless\Extensions\FeaturedMedia")) ? FeaturedMedia::imageSizes($featuredImageId): [],
			"excerpt"            => $post->post_excerpt,
		];
		$taxonomies = get_object_taxonomies( $post, 'objects' );
		foreach ( $taxonomies as $taxonomy ) {
			if(!$taxonomy->show_in_rest) continue;
			$terms = get_the_terms( $post, $taxonomy->name );
			if ( is_array( $terms ) && is_string($taxonomy->rest_base) ) {
				$postJson[$taxonomy->rest_base] = array_map( function ( $term ){
					/**
					 * @var WP_Term
					 */
					return [
						"id" => $term->term_id,
						"name" => $term->name,
						"slug" => $term->slug,
						"parent" => $term->parent,
						"count" => $term->count,
					];
				}, $terms );
			}
		}

		return $postJson;
	}

}