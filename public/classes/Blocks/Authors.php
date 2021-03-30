<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContentStructure;
use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Widgets\Toggle;
use stdClass;
use WP_User;

class Authors extends _BlockType {

	const DEFAULT_INCLUDE_EMBEDDED_POSTS = true;

	public function id(): BlockId {
		return BlockId::build( Plugin::BLOCKS_NAMESPACE, Plugin::BLOCK_NAME_AUTHORS );
	}

	public function category(): string {
		return "embed";
	}

	public function title(): string {
		return "Post authors";
	}

	public function contentStructure(): ContentStructure {
		return new ContentStructure( [
			Toggle::build( "include_embedded_posts", "Include embedded posts", self::DEFAULT_INCLUDE_EMBEDDED_POSTS ),
			// TODO: Toggle::build("include_additional_authors", "Include additional authors", true),
		] );
	}

	public function prepare( stdClass $content ): stdClass {
		/**
		 * @var AuthorsContent $content
		 */
		$content          = parent::prepare( $content );
		$content->authors = static::getAuthors( get_the_ID(), $content );

		return $content;
	}

	/**
	 * @param $post_id
	 * @param $content
	 *
	 * @return WP_User[]
	 */
	public static function getAuthors( $post_id, $content ) {
		$ids   = [];
		$ids[] = get_post_field( "post_author", $post_id );

		if ( ! isset( $content->include_embedded_posts ) ) {
			$content->include_embedded_posts = static::DEFAULT_INCLUDE_EMBEDDED_POSTS;
		}

		if ( $content->include_embedded_posts ) {
			$related_post_ids = Plugin::instance()->database->getEmbeddedPostIds( $post_id );
			foreach ( $related_post_ids as $post_id ) {
				$ids[] = get_post_field( "post_author", $post_id );
			}
		}

		return array_map( function ( $user_id ) {
			return get_user_by( 'ID', $user_id );
		}, array_unique( $ids ) );
	}
}