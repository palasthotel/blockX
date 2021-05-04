<?php


namespace Palasthotel\WordPress\Service;


class TermMetaStore implements StoreInterface {

	private $metaKey;

	public function __construct($metaKey) {
		$this->metaKey = $metaKey;
	}

	public function set( $id, $value ) {
		update_term_meta($id, $this->metaKey, $value);
	}

	public function get( $id ) {
		return get_term_meta($id, $this->metaKey, true);
	}

	public function delete( $id ) {
		delete_term_meta($id, $this->metaKey);
	}
}