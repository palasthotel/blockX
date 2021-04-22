<?php


namespace Palasthotel\WordPress\Taxonomy;


use WP_Term;

class TermMetaFields {

	/**
	 * @var TermMetaFieldsConfig $config
	 */
	protected $config;

	public function __construct( $config ) {
		$this->config = $config;
		foreach ( $this->config->taxonomies as $taxonomy ) {
			add_action( "{$taxonomy}_add_form_fields", [ $this, 'add_form_fields' ] );
			add_action( "{$taxonomy}_edit_form_fields", [ $this, 'edit_form_fields' ] );
		}
		add_action( "created_term", [ $this, 'save_term' ] );
		add_action( "edited_term", [ $this, 'save_term' ] );
	}

	/**
	 * @param string $taxonomy
	 */
	function add_form_fields( $taxonomy ) {
		if ( ! is_callable( $this->config->renderAdd ) ) {
			return;
		}
		call_user_func( $this->config->renderAdd, $taxonomy );
	}

	/**
	 * @param WP_Term $term
	 */
	function edit_form_fields( $term ) {
		if ( ! is_callable( $this->config->renderEdit ) ) {
			echo "<p class='error'>Missing edit render function on TaxonomyTermMetaConfig class.</p>";

			return;
		}
		call_user_func( $this->config->renderEdit, $term );
	}

	/**
	 * @param $term_id
	 */
	function save_term( $term_id ) {

		if ( ! is_callable( $this->config->onSave ) ) {
			return;
		}

		if ( ! in_array( get_term( $term_id )->taxonomy, $this->config->taxonomies ) ) {
			return;
		}

		call_user_func( $this->config->onSave, $term_id );
	}
}