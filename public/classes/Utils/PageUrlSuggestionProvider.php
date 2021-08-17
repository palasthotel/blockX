<?php

namespace Palasthotel\WordPress\BlockX\Utils;

class PageUrlSuggestionProvider extends PostUrlSuggestionProvider {

	public function getArgs( string $query ): array {
		$args = parent::getArgs($query);
		$args["post_type"] = "page";
		return $args;
	}
}