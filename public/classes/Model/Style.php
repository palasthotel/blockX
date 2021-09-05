<?php

namespace Palasthotel\WordPress\BlockX\Model;

/**
 * @property string $handle
 */
class Style {

	/**
	 * @var bool
	 */
	private $generate;

	public function __construct(string $handle, bool $generate){
		$this->handle      = $handle;
		$this->generate = $generate;
	}

	public function isGenerated(): bool {
		return  $this->generate;
	}

	public static function build(string $handle, bool $generate = true){
		return new Style($handle, $generate);
	}

	public function __toString() {
		return $this->handle;
	}

}