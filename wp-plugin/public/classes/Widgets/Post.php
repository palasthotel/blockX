<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


use Palasthotel\WordPress\BlockX\Plugin;

class Post extends _Widget {

	const TYPE = "post";
	private $postTypes = [ "post" ];
	private $postStatus = [ "publish" ];
	private $useContext = false;

	public static function build( string $key, string $label, $defaultValue = null ): Post {
		return new Post( $key, $label, static::TYPE, $defaultValue );
	}

	/**
	 * @param string[] $postTypes
	 *
	 * @return $this
	 */
	public function postTypes( array $postTypes ): Post {
		$this->postTypes = $postTypes;

		return $this;
	}

	/**
	 * @param string[] $postStatuses ["publish", "draft", ...]
	 *
	 * @return $this
	 */
	public function postStatus( array $postStatuses ): Post {
		$this->postStatus = $postStatuses;

		return $this;
	}

	/**
	 * Listen to changes of other widgets of contentStructure
	 *
	 * @param bool $activate
	 *
	 * @return $this
	 */
	public function useContext( bool $activate ): Post {
		$this->useContext = $activate;

		return $this;
	}

	public function toArray(): array {
		$arr                = parent::toArray();
		$arr["post_types"]  = $this->postTypes;
		$arr["post_status"] = $this->postStatus;
		$arr["use_context"] = $this->useContext;

		return $arr;
	}

	public function onSavePost( $post_id ) {
		parent::onSavePost( $post_id );
		Plugin::instance()->database->deleteRelations( $post_id );
	}

	public function onSaveInstance( $post_id, $value ) {
		parent::onSaveInstance( $post_id, $value );
		// save if value is set
		// do not delete if value is not set because there could be other instances with the same reference
		if ( ! empty( $value ) ) {
			Plugin::instance()->database->addRelation( $post_id, $value );
		}
	}

	public function onDeletePost( $post_id ) {
		parent::onDeletePost( $post_id );
		Plugin::instance()->database->deleteRelations( $post_id );
	}

}