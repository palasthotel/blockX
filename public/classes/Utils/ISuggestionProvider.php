<?php

namespace Palasthotel\WordPress\BlockX\Utils;

use Palasthotel\WordPress\BlockX\Model\_Suggestion;

interface ISuggestionProvider {
	/**
	 * @param string $query
	 *
	 * @return _Suggestion[]
	 */
	function suggest(string $query): array;
}