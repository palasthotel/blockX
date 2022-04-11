<?php

namespace Palasthotel\WordPress\BlockX\ComposedBlocks;

use Palasthotel\WordPress\BlockX\Model\ContainerStyles;
use Palasthotel\WordPress\BlockX\Model\Styles;
use Palasthotel\WordPress\BlockX\Plugin;

abstract class _ComposedBlockType implements _IComposedBlockType {

	private array $templates = [];
	private array $allowedBlocks = [];

	public function __construct(int $breakpoint = 0) {
		$this->breakpoint = $breakpoint;
	}

  public function registerComposedBlock() {
    // build block.json
    $bag = Plugin::instance()->bag;
    $bag->createComposedBlockJSONIfNotExists( $this );
    register_block_type( $bag->getBlockJSONFilePath( $this->id() ) );

  }

	public function styles(): Styles {
    return Styles::build();
	}

	public function editorStyles(): Styles {
		return Styles::build();
	}

	public function templates(): array{
		return apply_filters(Plugin::FILTER_COMPOSED_BLOCKS_TEMPLATES, $this->templates, $this);
	}

  public function allowedBlocks(): array{
		return apply_filters(Plugin::FILTER_COMPOSED_BLOCKS_ALLOWED_BLOCKS, $this->allowedBlocks, $this);
	}

}