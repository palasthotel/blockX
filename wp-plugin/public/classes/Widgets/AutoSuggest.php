<?php

namespace Palasthotel\WordPress\BlockX\Widgets;

use Palasthotel\WordPress\BlockX\Model\SimpleSuggestion;
use Palasthotel\WordPress\BlockX\Utils\ISuggestionProvider;

class AutoSuggest extends _AjaxWidget {

	const TYPE = "auto_suggest";

	private ISuggestionProvider|null $handler = null;

	public static function build(string $key, string $label, string $defaultValue = ""): AutoSuggest {
		return new static( $key, $label,static::TYPE, $defaultValue);
	}

	/**
	 * @param ISuggestionProvider $provider should return SimpleSuggestion array
	 *
	 * @return $this
	 */
	public function useProvider(ISuggestionProvider $provider): AutoSuggest {
		$this->handler = $provider;
		return $this;
	}

	/**
	 * @param string $query
	 *
	 * @return SimpleSuggestion[]
	 */
	public function ajax( string $query ): array {

		if($this->handler instanceof ISuggestionProvider){
			return $this->handler->suggest($query);
		}

		return [];
	}
}