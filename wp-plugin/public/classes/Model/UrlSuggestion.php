<?php

namespace Palasthotel\WordPress\BlockX\Model;

/**
 * @deprecated use LabelSuggestion instead
 */
class UrlSuggestion extends _Suggestion {
	public string $label;
	public static function build(string $label, string $url): _Suggestion{
		$suggestion = new LabelSuggestion($url);
		$suggestion->label = $label;
		return $suggestion;
	}
}
