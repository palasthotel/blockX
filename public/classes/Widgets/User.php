<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class User extends _Widget {

	const TYPE = "user";

	/**
	 * @var string[]
	 */
	private $userRoles;

	public function __construct( string $key, string $label, string $type, $defaultValue ) {
		parent::__construct( $key, $label, $type, $defaultValue );
		$this->userRoles = [];
	}

	public static function build( string $key, string $label, $defaultValue = null ): User {
		return new User( $key, $label, static::TYPE, $defaultValue );
	}

	/**
	 * @param string[] $userRoles ['administrator', 'editor', 'author', 'contributor' …]
	 */
	public function roles( array $userRoles ): User {
		$this->userRoles = $userRoles;

		return $this;
	}

	public function toArray(): array {
		$arr          = parent::toArray();
		$arr["roles"] = $this->userRoles;

		return $arr;
	}

}