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
	private $minWidth;
	private $minHeight;
	private $maxWidth;
	private $maxHeight;

	public function __construct( string $key, string $label, string $type, $defaultValue ) {
		parent::__construct( $key, $label, $type, $defaultValue );
		$this->mediaTypes       = [];
		$this->multiple         = false;
		$this->mediaUploadTitle = "";
		$this->minWidth = 0;
		$this->minHeight = 0;
		$this->maxWidth = 0;
		$this->maxHeight = 0;
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

	public function minWidth( int $width): Media {
		$this->minWidth = $width;
		return $this;
	}

	public function maxWidth( int $width): Media {
		$this->maxWidth = $width;
		return $this;
	}

	public function minHeight( int $height): Media {
		$this->minHeight = $height;
		return $this;
	}

	public function maxHeight( int $height): Media {
		$this->maxHeight = $height;
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
		$arr["minWidth"] = $this->minWidth;
		$arr["maxWidth"] = $this->maxWidth;
		$arr["minHeight"] = $this->minHeight;
		$arr["maxHeight"] = $this->maxHeight;

		return $arr;
	}
}