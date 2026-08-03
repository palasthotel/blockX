<?php


namespace Palasthotel\WordPress\BlockX\Model;

class StateLabel {

	public string $on;
	public string $off;
	public function __construct( string $on, string $off ) {
		$this->on  = $on;
		$this->off = $off;
	}

	public static function build( string $on, string $off ) {
		return new static( $on, $off );
	}

	public function toArray() {
		return [
			"on"  => $this->on,
			"off" => $this->off,
		];
	}

}
