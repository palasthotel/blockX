<?php


namespace Palasthotel\WordPress\BlockX\Gutenberg;


use Palasthotel\WordPress\BlockX\_Component;

abstract class _Block extends _Component implements _IBlock {

	function enqueueAssets(){}

	public function registerBlock(){
		register_block_type( $this->id(), array(
			'attributes'      => array(
				'content' => array(
					'type' => 'object',
				),
			),
			'render_callback' => array( $this, 'render' )
		) );
	}

	/**
	 * arguments for block register javascript call
	 * @return array
	 */
	function registerBlockTypeArgs(): array{
		return [];
	}

	function render(){
		// TODO: use templates
		return "not implemented";
	}

}