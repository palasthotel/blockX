<?php


namespace Palasthotel\WordPress\Taxonomy;


use WP_Term;

class TermMetaCheckboxField extends TermMetaFields {


	private $label = "";
	private $description = "";
	var $truthyValue = "true";

	public function label( string $value ): self {
		$this->label = $value;

		return $this;
	}

	public function description( string $value ): self {
		$this->description = $value;

		return $this;
	}

	public function truthyValue($value): self {
	    $this->truthyValue = $value;
	    return $this;
    }

	protected function addFormFields( string $taxonomy ) {
		?>
        <div class="form-field term-meta-<?= $this->id ?>-wrap">
            <label>
                <input type="checkbox" name="<?= $this->getFormName(); ?>" value="<?= $this->truthyValue; ?>"/>
				<?= $this->label; ?>
            </label>
            <p><?= $this->description ?></p>
        </div>
		<?php
	}

	protected function editFormFields( WP_Term $term ) {
		$value = $this->getValue($term->term_id);
		?>
		<tr class='form-field'>
			<th>
				<label for="<?= $this->id; ?>"><?= $this->label; ?></label>
			</th>
			<td>
				<label><input
						id="<?= $this->id; ?>"
						type="checkbox"
						name="<?= $this->getFormName(); ?>"
						value="<?= $this->truthyValue ?>"
						<?= ( $this->truthyValue === $value ) ? "checked" : "" ?>
					>
					<?= $this->description; ?></label>
			</td>
		</tr>
		<?php
	}

	public function isChecked($term_id): bool{
	    return $this->getValue($term_id) === $this->truthyValue;
	}

	protected function onSave( $term_id ) {
		if($this->getRequestValue() === $this->truthyValue){
			$this->setValue($term_id, $this->truthyValue);
		} else {
			$this->deleteValue($term_id);
		}
	}

}