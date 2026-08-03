<?php

namespace Palasthotel\WordPress\BlockX\Utils;

use Palasthotel\WordPress\BlockX\Model\LabelSuggestion;

class PostUrlSuggestionProvider implements ISuggestionProvider {

	private $postTypes = ["post"];

	public static function build(){
		return new self();
	}

	public function postTypes(array $postTypes){
		$this->postTypes = $postTypes;
		return $this;
	}

	function getArgs(string $query): array{
		return [
			"s" => $query,
			"fields" => "ids",
			"post_type" => $this->postTypes,
			"posts_per_page" => 10,
		];
	}

	function suggest( string $query ): array {
		$posts = get_posts($this->getArgs($query));
		return array_map(function($post_id){
			return LabelSuggestion::build(
				get_the_title($post_id),
				get_permalink($post_id)
			);
		}, $posts);
	}
}