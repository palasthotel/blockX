<?php

namespace Palasthotel\WordPress\BlockX\Model;

class Styles {

	/**
	 * @var string[]
	 */
	public array $handles;

	public function __construct(){
		$this->handles = [];
	}

	public static function build(){
		return new Styles();
	}

	public function add(string $handle): Styles {
		$this->handles[] = $handle;
		return $this;
	}

}
