<?php

namespace Palasthotel\WordPress\BlockX;

use Palasthotel\WordPress\BlockX\Blocks\_BlockType;
use Palasthotel\WordPress\BlockX\Components\Component;

class Templates extends Component {

	private $component;

	public function onCreate() {
		$this->component = new Components\Templates($this->plugin);
		$this->component->useThemeDirectory(Plugin::THEME_FOLDER);
		$this->component->useAddTemplatePathsFilter(Plugin::FILTER_ADD_TEMPLATES_PATHS);
	}

	/**
	 * @param _BlockType $block
	 *
	 * @param bool $editor
	 *
	 * @return false|string
	 */
	function get_block_template_path( _BlockType $block, bool $editor ) {
		$class = get_class( $block );
		while ( false !== $class ) {

			try {
				$test = new \ReflectionClass( $class );
			} catch ( \ReflectionException $e ) {
				break;
			}
			if ( $test->isAbstract() ) {
				break;
			}

			$type = new $class();
			$path = $this->component->get_template_path( $this->get_block_template_name( $type, $editor ) );
			if ( is_string( $path ) && ! empty( $path ) ) {
				return $path;
			}

			if($editor){
				// fallback to frontend template for editor
				$path = $this->component->get_template_path( $this->get_block_template_name( $type, false ) );
				if(is_string($path) && !empty($path)){
					return $path;
				}
			}

			// check next parent class
			$class = get_parent_class( $type );
		}

		return $this->component->get_template_path(
			$editor ? Plugin::BLOCK_FALLBACK_EDITOR_TEMPLATE : Plugin::BLOCK_FALLBACK_TEMPLATE
		);
	}

	/**
	 * @param _BlockType $block
	 * @param bool $editor
	 *
	 * @return string
	 */
	function get_block_template_name( _BlockType $block, bool $editor ) {
		$id         = $block->id();
		$template   = $editor ? Plugin::BLOCK_EDITOR_TEMPLATE : Plugin::BLOCK_TEMPLATE;
		$namespaced = str_replace( Plugin::TEMPLATE_PLACEHOLDER_NAMESPACE, $id->namespace, $template );

		return str_replace( Plugin::TEMPLATE_PLACEHOLDER_NAME, $id->name, $namespaced );
	}

}
