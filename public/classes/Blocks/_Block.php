<?php


namespace Palasthotel\WordPress\BlockX\Blocks;


use Palasthotel\WordPress\BlockX\_Component;
use Palasthotel\WordPress\BlockX\Plugin;
use stdClass;

abstract class _Block extends _Component implements _IBlock {

	/**
	 * @var stdClass
	 */
	var $content;

	public function __construct( $plugin ) {
		parent::__construct( $plugin );
		$this->content = new stdClass();
	}

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
	 * prepare contents before output gets build
	 *
	 * @param array $content
	 */
	function prepare( array $content){
		$this->content = (object) $content;
	}

	/**
	 * @param array $attributes
	 * @param string $editorContent
	 *
	 * @return string
	 */
	function build(array $attributes, string $editorContent){
		$this->prepare(isset($attributes["content"]) ? $attributes["content"] : []);

		ob_start();
		$content = $this->content;
		include Plugin::instance()->templates->get_block_template_path($this, $this->isEditor());
		$content = $editorContent.ob_get_contents();
		ob_end_clean();

		return $content;
	}

}