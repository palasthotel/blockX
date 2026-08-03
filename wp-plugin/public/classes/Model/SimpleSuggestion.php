<?php

namespace Palasthotel\WordPress\BlockX\Model;

class SimpleSuggestion extends _Suggestion {

	public static function build($value): _Suggestion{
		return new SimpleSuggestion($value);
	}
}