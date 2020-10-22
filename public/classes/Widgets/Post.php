<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Post extends _Widget {

	const TYPE = "post";
	private $postTypes = ["post"];

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

	public function toArray() {
		$arr = parent::toArray();
		$arr["post_types"] = $this->postTypes;
		return $arr;
	}

}