<?php


namespace Palasthotel\WordPress\Attachment;


use Palasthotel\WordPress\Service\PostMetaStore;
use Palasthotel\WordPress\Service\StoreInterface;

/**
 */
abstract class MetaField {

	protected $id;
	protected $label;
	protected $help;

	/**
	 * @var StoreInterface
	 */
	private $store;

	public function __construct( string $id, int $priority ) {
		$this->id    = $id;
		$this->label = "";
		$this->help  = "";

		$this->useStore( new PostMetaStore( $id ) );

		add_filter( 'attachment_fields_to_edit', function ( $form_fields, $post ) {
			$form_fields[ $this->id ] = $this->field( [], $post );

			return $form_fields;
		}, $priority, 2 );
		add_action( 'edit_attachment', function ( $attachment_id ) {
			$value = $this->getRequestValue( $attachment_id );
			if ( null != $value ) {
				$this->store->set( $attachment_id, $value );
			}
		} );
	}

	public static function build( string $id, int $priority = 10 ) {
		return new static( $id, $priority );
	}

	protected function getFormName( $post_id ): string {
		return "attachments[{$post_id}][{$this->id}]";
	}

	protected function getRequestValue( $post_id ) {
		if (
			! isset( $_POST["attachments"] ) ||
			! isset( $_POST["attachments"][ $post_id ] ) ||
			! isset( $_POST["attachments"][ $post_id ][ $this->id ] )
		) {
			return null;
		}

		return $_POST["attachments"][ $post_id ][ $this->id ];
	}

	public function label( string $value ): self {
		$this->label = $value;

		return $this;
	}

	public function help( string $value ): self {
		$this->help = $value;

		return $this;
	}

	/**
	 * @param string|int $attachment_id
	 *
	 * @return mixed
	 */
	public function getValue( $attachment_id ) {
		return $this->store->get( $attachment_id );
	}

	/**
	 * @param string|int $attachment_id
	 * @param $value
	 *
	 * @return mixed
	 */
	public function setValue($attachment_id, $value){
		return $this->store->set($attachment_id, $value);
	}

	public function useStore( StoreInterface $store ): self {
		$this->store = $store;

		return $this;
	}

	protected function field( array $field, \WP_Post $post ): array {
		$field["label"] = $this->label;
		$field["helps"] = $this->help;

		return $field;
	}


}