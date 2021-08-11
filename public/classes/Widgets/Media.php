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

	public static function build( string $key, string $label, string $defaultValue = "" ): Media {
		return new static( $key, $label, static::TYPE, $defaultValue );
	}

	/**
	 * @source https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/media-upload#allowedtypes
	 *
	 * @param string[] $mediaTypes ['image', 'audio', 'application/pdf', ...]
	 *
	 */
	public function mediaTypes( array $mediaTypes ): Media {
		$this->mediaTypes = $mediaTypes;

		return $this;
	}

	/**
	 * @deprecated use mediaTypes instead
	 */
	public function setMediaTypes( array $mediaTypes ): Media {
		return $this->mediaTypes($mediaTypes);
	}

	public function multiple( bool $allow ): Media {
		$this->multiple = $allow === true;

		return $this;
	}

	public function mediaUploadTitle( string $title ): Media {
		$this->mediaUploadTitle = $title;

		return $this;
	}

	/**
	 * @deprecated use mediaUploadTitle instead
	 */
	public function setMediaUploadTitle( string $title ): Media {
		return $this->mediaUploadTitle($title);
	}

	public function toArray(): array {
		$arr                     = parent::toArray();
		$arr["mediaTypes"]       = $this->mediaTypes;
		$arr["multiple"]         = $this->multiple;
		$arr["mediaUploadTitle"] = $this->mediaUploadTitle;

		return $arr;
	}
}