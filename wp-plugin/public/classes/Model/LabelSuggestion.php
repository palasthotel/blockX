<?php

namespace Palasthotel\WordPress\BlockX\Model;

class LabelSuggestion extends _Suggestion {
	public string $label;
	public static function build(string $label, string $value): _Suggestion{
		$suggestion = new LabelSuggestion($value);
		$suggestion->label = $label;
		return $suggestion;
	}
}
