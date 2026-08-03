<?php


namespace Palasthotel\WordPress\BlockX\Widgets;


use Exception;

class Text extends _Widget {

	const TYPE = "text";

	private $rows = 1;
	private $help = "";
	private $maxChars = false;


	public static function build( string $key, string $label, string $defaultValue = "" ) {
		return new static( $key, $label, static::TYPE, $defaultValue );
	}

	public function rows( int $rows ): Text {
		try {
			if ( $rows <= 0 ) {
				throw new Exception( "BlockX Text Widget rows needs to be larger than 0 but is $rows" );
			}
			$this->rows = $rows;
		} catch ( Exception $exception ) {
			error_log( $exception->getMessage() );
		}

		return $this;
	}

	public function help( string $help ): Text {
		$this->help = $help;

		return $this;
	}

	/**
	 * @param int|false $value
	 *
	 * @return self
	 */
	public function maxChars( $value ): Text {
		$this->maxChars = $value;

		return $this;
	}

	public function toArray(): array {
		$arr         = parent::toArray();
		$arr["rows"] = $this->rows;
		$arr["help"] = $this->help;
		$arr["max_chars"] = $this->maxChars;

		return $arr;
	}

}