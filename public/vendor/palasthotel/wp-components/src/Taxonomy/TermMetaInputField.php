<?php


namespace Palasthotel\WordPress\Taxonomy;


use WP_Term;

class TermMetaInputField extends TermMetaFields {

	private $label = "";
	private $description = "";
	private $type = "text";

	public function label( string $value ): self {
		$this->label = $value;

		return $this;
	}

	public function description( string $value ): self {
		$this->description = $value;

		return $this;
	}

	public function type( string $value ): self {
		$this->type = $value;

		return $this;
	}

	protected function addFormFields( string $taxonomy ) {
		?>
        <div class="form-field term-meta-<?= $this->id ?>-wrap">
            <label for="<?= $this->id ?>"><?= $this->label; ?></label>
            <input
                    id="<?= $this->id ?>"
                    type="<?= $this->type ?>"
                    name="<?= $this->getFormName(); ?>"
                    value=""
            />
            <p><?= $this->description ?></p>
        </div>
		<?php
	}

	protected function editFormFields( WP_Term $term ) {
		?>
        <tr class='form-field'>
            <th>
                <label for="<?= $this->id; ?>"><?= $this->label; ?></label>
            </th>
            <td>
                <input
                        id="<?= $this->id; ?>"
                        type="text"
                        name="<?= $this->getFormName(); ?>"
                        value="<?= $this->getValue( $term->term_id ); ?>"
                />
            </td>
        </tr>
		<?php
	}

}