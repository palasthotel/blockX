<?php


namespace Palasthotel\WordPress\PostsTable;


use Palasthotel\WordPress\Service\ProviderInterface;

class Column {

	/**
	 * @var string
	 */
	private $id;

	/**
	 * @var string
	 */
	private $label;

	/**
	 * @var string[]|ProviderInterface
	 */
	private $postTypes;

	/**
	 * @var null|string
	 */
	private $beforeCol;
	/**
	 * @var null|string
	 */
	private $afterCol;

	/**
	 * @var null|callable
	 */
	private $fnRender;


	public function __construct( string $id ) {
		$this->id        = $id;
		$this->label     = $id;
		$this->postTypes = get_post_types( array( 'public' => true ) );
		$this->beforeCol = null;
		$this->afterCol  = null;

		add_action( 'current_screen', function (\WP_Screen $screen) {

			if($screen->base != "edit") return;

			$postTypes = $this->postTypes instanceof ProviderInterface ? $this->postTypes->get() : $this->postTypes;
			if(!in_array($screen->post_type, $postTypes)) return;

			add_filter( "manage_{$screen->post_type}_posts_columns", function ( $columns ) {
				return $this->addColumn( $columns );
			} );
			add_action("manage_{$screen->post_type}_posts_custom_column", function($columnName, $post_id){
				if($columnName === $this->id && is_callable($this->fnRender)){
					call_user_func($this->fnRender, $post_id);
				}
			}, 10, 2);
		} );
	}

	/**
	 * @param string $id
	 *
	 * @return self
	 */
	public static function build( string $id ): self {
		return new static( $id );
	}

	public function label( string $value ): self {
		$this->label = $value;

		return $this;
	}

	/**
	 * @param string[] | ProviderInterface $values
	 *
	 * @return $this
	 */
	public function postTypes( $values ): self {
		$this->postTypes = $values;

		return $this;
	}

	public function after( string $columnId ): self {
		$this->afterCol  = $columnId;
		$this->beforeCol = null;

		return $this;
	}

	public function before( string $columnId ): self {
		$this->beforeCol = $columnId;
		$this->afterCol  = null;

		return $this;
	}

	public function render(callable $fn): self {
		$this->fnRender = $fn;
		return $this;
	}

	private function addColumn( $columns ) {
		if ( null === $this->afterCol && null === $this->beforeCol ) {
			$columns[ $this->id ] = $this->label;

			return $columns;
		}
		$newCols = [];
		$added   = false;
		foreach ( $columns as $key => $label ) {

			if ( !$added ) {
				if ( $key === $this->beforeCol ) {
					$newCols[ $this->id ] = $this->label;
					$newCols[ $key ]      = $label;
					$added                = true;
					continue;
				} else if ( $key === $this->afterCol ) {
					$newCols[ $key ]      = $label;
					$newCols[ $this->id ] = $this->label;
					$added                = true;
					continue;
				}
			}

			$newCols[$key] = $label;

		}

		return $newCols;
	}


}