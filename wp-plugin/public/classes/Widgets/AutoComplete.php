<?php

namespace Palasthotel\WordPress\BlockX\Widgets;

use Palasthotel\WordPress\BlockX\Model\_Suggestion;
use Palasthotel\WordPress\BlockX\Utils\ISuggestionProvider;

class AutoComplete extends _AjaxWidget {

	const TYPE = "auto_complete";

	private ISuggestionProvider|null $handler = null;

	public static function build(string $key, string $label, string $defaultValue = ""): self {
		return new static( $key, $label,static::TYPE, $defaultValue);
	}

	/**
	 * @param ISuggestionProvider $provider should return SimpleSuggestion array
	 *
	 * @return $this
	 */
	public function useProvider(ISuggestionProvider $provider): self {
		$this->handler = $provider;
		return $this;
	}

	/**
	 * @param string $query
	 *
	 * @return _Suggestion[]
	 */
	public function ajax( string $query ): array {

		if($this->handler instanceof ISuggestionProvider){
			return $this->handler->suggest($query);
		}

		return [];
	}

}