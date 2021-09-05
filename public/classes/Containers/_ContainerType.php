<?php

namespace Palasthotel\WordPress\BlockX\Containers;

use Palasthotel\WordPress\BlockX\Model\Style;
use Palasthotel\WordPress\BlockX\Plugin;

abstract class _ContainerType implements _IContainerType {

	public function registerContainer(){
		// build block.json
		$bag = Plugin::instance()->bag;
		$bag->createBlockJSONIfNotExists($this);
		register_block_type( $bag->getBlockJSONFilePath($this) );

		// build style.css
		$styles = [
			$this->style(),
			$this->editorStyle(),
		];
		foreach ($styles as $style){
			if($style->isGenerated()){
				$bag->createContainerStylesIfNotExists($this, $style);
				$path = $bag->getContainerStylesFilePath($this, $style);
				$url = $bag->getContainerStylesUrl($this, $style);
				wp_register_style(
					(string) $style,
					$url,
					[Plugin::HANDLE_CSS_CONTAINER_BASE],
					filemtime($path)
				);
			}
		}
	}

	public function style(): Style {
		return Style::build(
			$this->id()->namespace."_".$this->id()->name
		);
	}

	public function editorStyle(): Style {
		return Style::build(
			$this->id()->namespace."_".$this->id()->name
		);
	}

	public function useColumnsInTabletPreview(): bool {
		return false;
	}

	public function useColumnsInMobilePreview(): bool {
		return false;
	}

}