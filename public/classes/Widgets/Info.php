<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Info extends _Widget {

	const TYPE = "info";
	private $text;

	public static function build(string $text): Info {
		$widget = new Info( '', "", static::TYPE, false );
		$widget->text = $text;
		return $widget;
	}

	public function toArray(): array {
		$arr         = parent::toArray();
		$arr["text"] = wp_kses($this->text, [
			"br" => [],
			"b" => [],
			"i" => [],
			"strong" => [],
			"em" => [],
			"strike" => [],
		]);
		return $arr;
	}

}
