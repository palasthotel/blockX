<?php


namespace Palasthotel\WordPress\BlockX\ContentStructure;


abstract class _Item implements _IItem {

	private $key;
	private $title;
	private $type;

	public function __construct(string $key, string $title, string $type) {
		$this->key = $key;
		$this->title = $title;
		$this->type = $type;
	}

	public function key(): string {
		return $this->key;
	}
	public function title(): string {
		return $this->title;
	}
	public function type(): string {
		return $this->type;
	}

	public function toArray(){
		return [
			"key" => $this->key(),
			"title" => $this->title(),
			"type" => $this->type(),
		];
	}
}