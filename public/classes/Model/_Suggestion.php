<?php

namespace Palasthotel\WordPress\BlockX\Model;

abstract class _Suggestion {
	var $value;
	public function __construct(string $value) {
		$this->value = $value;
	}
}