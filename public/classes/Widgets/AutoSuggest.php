<?php

namespace Palasthotel\WordPress\BlockX\Widgets;

use WP_REST_Request;

class AutoSuggest extends _AjaxWidget {

	const TYPE = "auto_suggest";
	/**
	 * @var callable|null $handler
	 */
	private $handler = null;

	public static function build(string $key, string $label, string $defaultValue = ""): AutoSuggest {
		return new static( $key, $label,static::TYPE, $defaultValue);
	}

	public function suggest(callable $handler): AutoSuggest{
		$this->handler = $handler;
		return $this;
	}

	public function ajax( string $query, WP_REST_Request $request ): array {

		if(is_callable($this->handler)){
			return call_user_func($this->handler, $request);
		}

		return [];
	}
}