<?php

namespace Palasthotel\WordPress\BlockX\Widgets;

use Palasthotel\WordPress\BlockX\Model\UrlSuggestion;
use Palasthotel\WordPress\BlockX\Utils\PostUrlSuggestionProvider;

class Url extends _AjaxWidget {

	const TYPE = "url";

	/**
	 * @var PostUrlSuggestionProvider
	 */
	private $provider;

	public static function build(string $key, string $label, string $defaultValue = ""): Url {
		return (new static( $key, $label,static::TYPE, $defaultValue))
			->useProvider(new PostUrlSuggestionProvider());
	}

	public function useProvider(PostUrlSuggestionProvider $provider): Url {
		$this->provider = $provider;
		return $this;
	}

	/**
	 * @param string $query
	 *
	 * @return UrlSuggestion[]
	 */
	public function ajax( string $query ): array {
		return $this->provider->suggest($query);
	}
}