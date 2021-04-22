<?php


namespace Palasthotel\WordPress\Taxonomy;


use WP_Term;

/**
 * @property string taxonomy
 * @property string label
 * @property string description
 * @property callable isChecked
 * @property int fieldId
 * @property callable onSaveCheckbox
 *
 */
class TermMetaCheckboxFieldConfig extends TermMetaFieldsConfig {

	const TRUTHY_VALUE = "true";
	private static $counter = 0;

	public function __construct() {
		parent::__construct();
		$this->fieldId = static::$counter++;

		$this->add(function($taxonomy){
            ?>
            <div class="form-field term-meta-<?= $this->fieldId ?>-wrap">
                <label>
                    <input type="checkbox" name="<?= $this->getFieldName(); ?>" value="<?= static::TRUTHY_VALUE ?>" />
                    <?= $this->label; ?>
                </label>
                <p><?= $this->description ?></p>
            </div>
            <?php
        });

		$this->edit(function($term){
		    if(!is_callable($this->isChecked)){
		        echo "<p class='error'>Missing isChecked function on TaxonomyTermMetaCheckboxConfig.</p>";
		        return;
            }
			$_isChecked = call_user_func($this->isChecked, $term);
			/**
			 * @var WP_Term $term
			 */
			?>
			<tr class='form-field'>
				<th>
					<label for="<?= $this->getFieldName(); ?>"><?= $this->label; ?></label>
				</th>
				<td>
					<label><input
							id="<?= $this->getFieldName(); ?>"
							type="checkbox"
							name="<?= $this->getFieldName(); ?>"
                            value="<?= static::TRUTHY_VALUE ?>"
							<?= ( $_isChecked ) ? "checked" : "" ?>
						>
						<?= $this->description; ?></label>
				</td>
			</tr>
			<?php
		});
	}

	private function getFieldName(){
	    return "meta_".$this->fieldId;
	}

	public function label(string $value): self{
	    $this->label = $value;
	    return $this;
	}

	public function description(string $value): self{
		$this->description = $value;
		return $this;
	}
	
	public function isChecked(callable $callable): self {
	    $this->isChecked = $callable;
	    return $this;
	}

	public function onSaveCheckbox(callable $callable): self{
		$this->onSaveCheckbox = $callable;
		$this->onSave(function($term_id){
			call_user_func(
				$this->onSaveCheckbox,
				$term_id,
				isset( $_POST[ $this->getFieldName() ] ) && $_POST[ $this->getFieldName() ] == static::TRUTHY_VALUE
			);
		});
		return $this;
	}
}