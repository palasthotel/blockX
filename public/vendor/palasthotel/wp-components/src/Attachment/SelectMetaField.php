<?php


namespace Palasthotel\WordPress\Attachment;


use Palasthotel\WordPress\Model\Option;

class SelectMetaField extends MetaField {

	/**
	 * @var Option[]
	 */
	private $options = [];

	/**
	 * @param Option[] $options
	 *
	 * @return $this
	 */
	public function options( array $options ): self {
		$this->options = $options;

		return $this;
	}

	protected function field( array $field, \WP_Post $post ): array {
		$field = parent::field( $field, $post );

		$field["input"] = "html";
		$name = $this->getFormName($post->ID);
		$value = $this->getValue($post->ID);

		ob_start();
		echo "<select name='$name' id='attachments-{$post->ID}-{$this->id}' style='max-width: 100%'>";
		foreach ($this->options as $option){
		    $selected = ($value === $option->value) ? "selected='selected'" : "";
            echo "<option value='$option->value' $selected>$option->label</option>";
        }
		echo "</select>";
		$field["html"] = ob_get_contents();
		ob_end_clean();

		return $field;
	}


}