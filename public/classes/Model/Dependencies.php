<?php


namespace Palasthotel\WordPress\BlockX\Model;


class Dependencies {

	private $handles = [];

	/**
	 * @param string $handle
	 */
	public function addHandle( string $handle ) {
		$this->handles[] = $handle;
	}

	/**
	 * @return string[]
	 */
	public function get(): array {
		return $this->handles;
	}

}