<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


class Media extends _Widget {

	const TYPE = "media";

	/**
	 * @var string[]
	 */
	private $mediaTypes;
	private $multiple;
	private $mediaUploadTitle;

	public function __construct( string $key, string $label, string $type, $defaultValue ) {
		parent::__construct( $key, $label, $type, $defaultValue );
		$this->mediaTypes       = [];
		$this->multiple         = false;
		$this->mediaUploadTitle = "";
	}

	public static function build( string $key, string $label, string $defaultValue = "" ) {
		return new static( $key, $label, static::TYPE, $defaultValue );
	}

	/**
	 * @source https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/media-upload#allowedtypes
	 *
	 * @param string[] $mediaTypes ['image', 'audio', 'application/pdf', ...]
	 *
	 * @return $this
	 */
	public function setMediaTypes( array $mediaTypes ) {
		$this->mediaTypes = $mediaTypes;

		return $this;
	}

	/**
	 * @param boolean $allow
	 *
	 * @return $this
	 */
	public function multiple( bool $allow ) {
		$this->multiple = $allow === true;

		return $this;
	}

	/**
	 * @param string $title
	 *
	 * @return $this
	 */
	public function setMediaUploadTitle( string $title ) {
		$this->mediaUploadTitle = $title;

		return $this;
	}

	public function toArray() {
		$arr                     = parent::toArray();
		$arr["mediaTypes"]       = $this->mediaTypes;
		$arr["multiple"]         = $this->multiple;
		$arr["mediaUploadTitle"] = $this->mediaUploadTitle;

		return $arr;
	}
}