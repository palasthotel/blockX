<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


use Palasthotel\WordPress\BlockX\Plugin;

class User extends _Widget {

	const TYPE = "user";

	/**
	 * @var string[]
	 */
	private $userRoles;

	public function __construct( string $key, string $label, string $type, $defaultValue ) {
		parent::__construct( $key, $label, $type, $defaultValue );
		$this->userRoles       = [];
	}

	public static function build( string $key, string $label, $defaultValue = null ) {
		return new User( $key, $label, static::TYPE, $defaultValue );
	}

	/**
	 * @param string[] $userRoles ['administrator', 'editor', 'author', 'contributor' …]
	 *
	 * @return $this
	 */
	public function setUserRoles( array $userRoles ) {
		$this->userRoles = $userRoles;

		return $this;
	}

	public function toArray() {
		$arr                = parent::toArray();
		$arr["roles"]  = $this->userRoles;

		return $arr;
	}

}