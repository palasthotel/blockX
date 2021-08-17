<?php

namespace Palasthotel\WordPress\BlockX\Utils;

/**
 * @deprecated use PostUrlSuggestionProvider::build()->postTypes(["page"]) instead
 */
class PageUrlSuggestionProvider extends PostUrlSuggestionProvider {

	public function getArgs( string $query ): array {
		$this->postTypes(["page"]);
		$args = parent::getArgs($query);
		return $args;
	}
}