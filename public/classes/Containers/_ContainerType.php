<?php

namespace Palasthotel\WordPress\BlockX\Containers;

use Palasthotel\WordPress\BlockX\Model\ContainerStyles;
use Palasthotel\WordPress\BlockX\Model\Styles;
use Palasthotel\WordPress\BlockX\Plugin;

abstract class _ContainerType implements _IContainerType {

	private int $breakpoint;


	public function __construct(int $breakpoint = 0) {
		$this->breakpoint = $breakpoint;
	}

	public function registerContainer() {
		// build block.json
		$bag = Plugin::instance()->bag;
		$bag->createContainerBlockJSONIfNotExists( $this );
		register_block_type( $bag->getBlockJSONFilePath( $this->id() ) );

		// build styles
		$styles = [$this->styles(), $this->editorStyles()];
		foreach ($styles as $style){
			if ( $style instanceof ContainerStyles && $style->isGenerated() ) {
				$bag->createContainerStylesIfNotExists( $this, $style );
				$path = $bag->getContainerStylesFilePath( $this->id(), $style );
				$url  = $bag->getContainerStylesUrl( $this->id(), $style );
				wp_register_style(
					$style->handle,
					$url,
					[],
					filemtime( $path )
				);
			}
		}
	}

	public function styles(): Styles {
		return ContainerStyles::generate( $this->id()->namespace . "_" . $this->id()->name);
	}

	public function editorStyles(): Styles {
		return Styles::build();
	}

	const BREAKPOINT_TABLET_PREVIEW = 778;

	public function breakpoint(): int{
		return apply_filters(Plugin::FILTER_CONTAINER_BREAKPOINT, $this->breakpoint, $this);
	}

}