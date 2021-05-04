<?php


namespace Palasthotel\WordPress\Taxonomy;


use Palasthotel\WordPress\Service\StoreInterface;
use Palasthotel\WordPress\Service\TermMetaStore;
use WP_Term;

abstract class TermMetaFields {

	/**
	 * @var string
	 */
	protected $id;

	/**
	 * @var StoreInterface
	 */
	private $store;

	public function __construct( string $id, array $taxonomies ) {

		$this->id = $id;

		$this->useStore( new TermMetaStore( $id ) );

		foreach ( $taxonomies as $taxonomy ) {
			add_action( "{$taxonomy}_add_form_fields", function ( $taxonomy ) {
				$this->addFormFields( $taxonomy );
			} );
			add_action( "{$taxonomy}_edit_form_fields", function ( $term ) {
				$this->editFormFields( $term );
			} );
		}
		$onSave = function ( $term_id ) {
			$this->onSave( $term_id );
		};
		add_action( "created_term", $onSave );
		add_action( "edited_term", $onSave );
	}

	public static function build( $id, $taxonomies = [ "category" ] ) {
		return new static( $id, $taxonomies );
	}

	protected function addFormFields( string $taxonomy ){

	}

	protected function editFormFields( WP_Term $term ){

	}

	protected function onSave( $term_id ) {
		$this->store->set($term_id, $this->getRequestValue());
	}

	protected function getFormName(): string {
		return "term_meta[{$this->id}]";
	}

	protected function getRequestValue() {
		if (
			! isset( $_POST["term_meta"] ) ||
			! isset( $_POST["term_meta"][ $this->id ] )
		) {
			return null;
		}

		return $_POST["term_meta"][ $this->id ];
	}

	public function getValue( $term_id ) {
		return $this->store->get( $term_id );
	}

	public function setValue( $term_id, $value ) {
		return $this->store->set( $term_id, $value );
	}

	public function deleteValue($term_id){
		return $this->store->delete($term_id);
	}

	public function useStore( StoreInterface $store ): self {
		$this->store = $store;

		return $this;
	}
}