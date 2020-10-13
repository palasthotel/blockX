<?php

namespace Palasthotel\WordPress\BlockX;

use Palasthotel\WordPress\BlockX\Blocks\_BlockType;

class Templates extends _Component {

	/**
	 * @var null|string[]
	 */
	private $sub_dirs = null;

	/**
	 * @param _BlockType $block
	 *
	 * @param bool $editor
	 *
	 * @return false|string
	 */
	function get_block_template_path(_BlockType $block, bool $editor){
		$path = $this->get_template_path($this->get_block_template_name($block, $editor));
		return false !== $path ? $path :
			$this->get_template_path(
				$editor ? Plugin::BLOCK_FALLBACK_EDITOR_TEMPLATE: Plugin::BLOCK_FALLBACK_TEMPLATE
			);
	}

	/**
	 * @param _BlockType $block
	 * @param bool $editor
	 *
	 * @return string
	 */
	function get_block_template_name(_BlockType $block, bool $editor){
		$id = $block->id();
		$template = $editor ? Plugin::BLOCK_EDITOR_TEMPLATE : Plugin::BLOCK_TEMPLATE;
		$namespaced = str_replace(Plugin::TEMPLATE_PLACEHOLDER_NAMESPACE, $id->namespace, $template);
		return str_replace(Plugin::TEMPLATE_PLACEHOLDER_NAME, $id->name, $namespaced);
	}

	/**
	 * Look for existing template path
	 * @return string|false
	 */
	function get_template_path( $template ) {

		// theme or child theme
		if ( $overridden_template = locate_template( $this->get_template_dirs($template) ) ) {
			return $overridden_template;
		}

		// parent theme
		foreach ($this->get_template_dirs($template) as $path){
			if( is_file( get_template_directory()."/$path")){
				return get_template_directory()."/$path";
			}
		}

		// other plugins
		$paths = apply_filters(Plugin::FILTER_ADD_TEMPLATES_PATHS, array());
		// add default templates at last position
		$paths[] = $this->plugin->path . '/templates';
		// find templates
		foreach ($paths as $path){
			if(is_file("$path/$template")){
				return "$path/$template";
			}
		}

		// if nothing found...
		return false;
	}

	/**
	 * get array of possible template files in theme
	 * @param $template
	 *
	 * @return array
	 */
	function get_template_dirs($template){
		$dirs = array(
			Plugin::THEME_FOLDER . "/" . $template,
		);
		foreach ($this->get_sub_dirs() as $sub){
			$dirs[] = $sub.'/'.$template;
		}
		return $dirs;
	}

	/**
	 * paths for locate_template
	 * @return array
	 */
	function get_sub_dirs(){
		if($this->sub_dirs == null){
			$this->sub_dirs = array();
			$dirs = array_filter(glob(get_template_directory().'/'.Plugin::THEME_FOLDER.'/*'), 'is_dir');
			foreach($dirs as $dir){
				$this->sub_dirs[] = str_replace(get_template_directory().'/', '', $dir);
			}
		}
		return $this->sub_dirs;
	}

}
