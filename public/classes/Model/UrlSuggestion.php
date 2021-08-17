<?php

namespace Palasthotel\WordPress\BlockX\Model;

class UrlSuggestion extends _Suggestion {
	var $label;
	public static function build($label, $url): _Suggestion{
		$suggestion = new UrlSuggestion($url);
		$suggestion->label = $label;
		return $suggestion;
	}
}