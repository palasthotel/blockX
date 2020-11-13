<?php

namespace Palasthotel\WordPress\BlockX;

use Palasthotel\WordPress\BlockX\Blocks\_BlockType;
use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContentStructure;
use stdClass;

class PostEmbed extends _BlockType {

	public function id(): BlockId {
		return BlockId::build(Plugin::BLOCKS_NAMESPACE, Plugin::BLOCK_NAME_POST_EMBED);
	}

	public function category(): string {
		return "embed";
	}

	public function title(): string {
		return "Post Embed";
	}

	public function contentStructure(): ContentStructure {
		return new ContentStructure([
			Widgets\Post::build("post_id", "Post")->postStatus(["publish"])
		]);
	}

	public function prepare( stdClass $content ): stdClass {
		$content =  parent::prepare( $content );
		if( null == $content->post_id || empty( $content->post_id ) ) {
			$content->post = null;
		} else {
			$content->post = get_post( $content->post_id);
		}

		return $content;
	}
}