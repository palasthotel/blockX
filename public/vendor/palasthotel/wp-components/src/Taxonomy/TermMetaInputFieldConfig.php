<?php


namespace Palasthotel\WordPress\Taxonomy;


use WP_Term;

/**
 * @property string taxonomy
 * @property string label
 * @property string description
 * @property callable value
 * @property int fieldId
 * @property callable onSaveInput
 *
 */
class TermMetaInputFieldConfig extends TermMetaFieldsConfig {

	private static $counter = 0;

	public function __construct() {
		parent::__construct();
		$this->fieldId = static::$counter++;

		$this->edit(function($term){
		    if(!is_callable($this->value)){
		        echo "<p class='error'>Missing isChecked on TaxonomyTermEditInputOptions.</p>";
		        return;
            }
			$value = call_user_func($this->value, $term);
			/**
			 * @var WP_Term $term
			 */
			?>
			<tr class='form-field'>
				<th>
					<label for="<?= $this->fieldId; ?>"><?= $this->label; ?></label>
				</th>
				<td>
					<input
                        id="<?= $this->fieldId; ?>"
                        type="text"
                        name="<?= $this->fieldId; ?>"
                        value="<?= $value ?>"
                    />
				</td>
			</tr>
			<?php
		});
	}

	public function label(string $value): self{
	    $this->label = $value;
	    return $this;
	}

	public function description(string $value): self{
		$this->description = $value;
		return $this;
	}
	
	public function value(callable $callable): self {
	    $this->value = $callable;
	    return $this;
	}

	public function onSave(callable $callable): self{
		$this->onSaveInput = $callable;
		$this->onSave(function($term_id){
		    $value = isset( $_POST[ $this->fieldId ] ) ? sanitize_text_field($_POST[$this->fieldId]) : null;
			call_user_func(
				$this->onSaveInput,
				$term_id,
				$value
			);
		});
		return $this;
	}
}