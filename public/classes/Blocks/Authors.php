<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContentStructure;
use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Widgets\Toggle;
use stdClass;

class Authors extends _BlockType {

	public function id(): BlockId {
		return BlockId::build(Plugin::BLOCKS_NAMESPACE, Plugin::BLOCK_NAME_AUTHORS);
	}

	public function category(): string {
		return "embed";
	}

	public function title(): string {
		return "Post authors";
	}

	public function contentStructure(): ContentStructure {
		return new ContentStructure([
			Toggle::build("include_embedded_posts", "Include embedded posts", true),
			// TODO: Toggle::build("include_additional_authors", "Include additional authors", true),
		]);
	}

	public function prepare( stdClass $content ): stdClass {
		/**
		 * @var AuthorsContent $content
		 */
		$content =  parent::prepare( $content );
		$related_post_ids = Plugin::instance()->database->getRelatedPostIds(get_the_ID());

		$ids[] = get_post_field("post_author");
		foreach ($related_post_ids as $post_id){
			$ids[] = get_post_field("post_author", $post_id);
		}

		$content->author_ids = $ids;
		$content->authors = array_map(function($user_id) {
			return get_user_by('ID', $user_id);
		}, array_unique($ids));

		return $content;
	}
}