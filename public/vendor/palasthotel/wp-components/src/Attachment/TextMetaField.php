<?php


namespace Palasthotel\WordPress\Attachment;

class TextMetaField extends MetaField {

	protected $input = "text";

	protected function field( array $field, \WP_Post $post ): array {
		$field          = parent::field( $field, $post );
		$field["input"] = $this->input;
		$field["value"] = $this->getValue($post->ID);

		return $field;
	}
}