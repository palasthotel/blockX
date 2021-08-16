<?php

namespace Palasthotel\WordPress\BlockX\Widgets;

use WP_REST_Request;

class Url extends _AjaxWidget {

	const TYPE = "url";

	public static function build(string $key, string $label, string $defaultValue = ""): Url {
		return new static( $key, $label,static::TYPE, $defaultValue);
	}

	public function ajax( string $query, WP_REST_Request $request ): array {

		$posts = get_posts(["s" => $query, "fields" => "ids"]);

		return array_map(function($post_id){
			return [
				"label" => get_the_title($post_id),
				"value" => get_permalink($post_id),
			];
		}, $posts);
	}
}