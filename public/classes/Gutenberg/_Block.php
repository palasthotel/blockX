<?php


namespace Palasthotel\WordPress\BlockX\Gutenberg;


use Palasthotel\WordPress\BlockX\_Component;

abstract class _Block extends _Component implements _IBlock {

	function isEditor(){
		return defined( 'REST_REQUEST' ) && REST_REQUEST == true;
	}

	function enqueueAssets(){}

	public function registerBlock(){
		register_block_type( $this->id(), array(
			'attributes'      => array(
				'content' => array(
					'type' => 'object',
				),
			),
			'render_callback' => array( $this, 'build' )
		) );
	}

	/**
	 * arguments for block register javascript call
	 * @return array
	 */
	function registerBlockTypeArgs(): array{
		return [];
	}

	/**
	 * @param array $attributes
	 * @param string $content
	 *
	 * @return string
	 */
	function build($attributes, $content){
		// TODO: use templates
		return "not implemented";
	}

}