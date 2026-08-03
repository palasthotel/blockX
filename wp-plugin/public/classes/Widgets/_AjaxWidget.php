<?php

namespace Palasthotel\WordPress\BlockX\Widgets;

abstract class _AjaxWidget extends _Widget {

	abstract function ajax(string $query): array;

}