<?php

namespace Palasthotel\WordPress\BlockX\Model;

abstract class _Suggestion {
	public string $value;
	public function __construct(string $value) {
		$this->value = $value;
	}
}
