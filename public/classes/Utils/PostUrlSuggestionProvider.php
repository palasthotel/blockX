<?php

namespace Palasthotel\WordPress\BlockX\Utils;

use Palasthotel\WordPress\BlockX\Model\UrlSuggestion;

class PostUrlSuggestionProvider implements ISuggestionProvider {

	function getArgs(string $query): array{
		return ["s" => $query, "fields" => "ids"];
	}

	function suggest( string $query ): array {
		$posts = get_posts($this->getArgs($query));
		return array_map(function($post_id){
			return UrlSuggestion::build(
				get_the_title($post_id),
				get_permalink($post_id)
			);
		}, $posts);
	}
}