<?php


namespace Palasthotel\WordPress\Attachment;


class HTMLMetaField extends MetaField {

	private $renderHtml;

	/**
	 * @param callable $render
	 *
	 * @return HTMLMetaField
	 */
	public function html( callable $render ): self {
		$this->renderHtml = $render;
		return $this;
	}

	protected function field( array $field, \WP_Post $post ): array {
		$field = parent::field($field, $post);
		$field["input"] = "html";
		ob_start();
		call_user_func( $this->renderHtml, $this->getFormName( $post->ID ), $post );
		$field["html"] = ob_get_contents();
		ob_end_clean();
		return $field;
	}

}