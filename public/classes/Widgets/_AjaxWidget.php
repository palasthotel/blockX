<?php

namespace Palasthotel\WordPress\BlockX\Widgets;

use WP_REST_Request;

abstract class _AjaxWidget extends _Widget {

	abstract function ajax(string $query, WP_REST_Request $request): array;

}