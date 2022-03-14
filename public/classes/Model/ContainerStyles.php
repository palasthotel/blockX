<?php

namespace Palasthotel\WordPress\BlockX\Model;

/**
 * @property string $handle
 */
class ContainerStyles extends Styles {

	/**
	 * @var bool
	 */
	private $generate;

	public function __construct(string $handle, bool $generate){
		parent::__construct();
		$this->handle = $handle;
		$this->handles[] = $handle;
		$this->generate = $generate;
	}

	public function isGenerated(): bool {
		return  $this->generate;
	}

	public static function generate(string $handle, bool $generate = true){
		return new ContainerStyles($handle, $generate);
	}

}