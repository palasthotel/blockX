<?php

namespace Palasthotel\WordPress\BlockX\Model;

class UrlSuggestion extends _Suggestion {
	public string $label;
	public static function build(string $label, string $url): _Suggestion{
		$suggestion = new UrlSuggestion($url);
		$suggestion->label = $label;
		return $suggestion;
	}
}
