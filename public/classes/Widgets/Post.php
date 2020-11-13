<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


use Palasthotel\WordPress\BlockX\Plugin;

class Post extends _Widget {

	const TYPE = "post";
	private $postTypes = ["post"];
	private $postStatus = ["publish"];

	public static function build(string $key, string $label, ?int $defaultValue = null){
		return new Post($key, $label, static::TYPE, $defaultValue);
	}

	/**
	 * @param string[] $postTypes
	 *
	 * @return $this
	 */
	public function postTypes(array $postTypes){
		$this->postTypes = $postTypes;
		return $this;
	}

	/**
	 * @param array $postStatuses
	 *
	 * @return $this
	 */
	public function postStatus(array $postStatuses){
		$this->postStatus = $postStatuses;
		return $this;
	}

	public function toArray() {
		$arr = parent::toArray();
		$arr["post_types"] = $this->postTypes;
		$arr["post_status"] = $this->postStatus;
		return $arr;
	}

	public function onSavePost( int $post_id ) {
		parent::onSavePost( $post_id );
		Plugin::instance()->database->deleteRelations($post_id);
	}

	public function onSaveInstance( int $post_id, $value ) {
		parent::onSaveInstance( $post_id, $value );
		Plugin::instance()->database->addRelation($post_id, $value);
	}

	public function onDeletePost( int $post_id ) {
		parent::onDeletePost( $post_id );
		Plugin::instance()->database->deleteRelations($post_id);
	}

}