<?php


namespace Palasthotel\WordPress\BlockX\Model;


class BlockId {

	public $namespace;
	public $name;

	public function __construct(string $namespace, string $name) {
		$this->namespace = $namespace;
		$this->name = $name;
	}

	public static function build(string $namespace, string $name){
		return new static($namespace, $name);
	}

	public function __toString() {
		return $this->namespace."/".$this->name;
	}
}