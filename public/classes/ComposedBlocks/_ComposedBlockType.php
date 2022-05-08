<?php

namespace Palasthotel\WordPress\BlockX\ComposedBlocks;

use Palasthotel\WordPress\BlockX\Model\Styles;
use Palasthotel\WordPress\BlockX\Plugin;

abstract class _ComposedBlockType implements _IComposedBlockType {

  private array $templates = [];
  private array $allowedBlocks = [];
  private string $orientation = "vertical";
  private string $templateLock = "";

  public function registerComposedBlock() {
    // build block.json
    $bag = Plugin::instance()->bag;
    $bag->createComposedBlockJSONIfNotExists( $this );

    // so they can be enqueued
    $this->script();
    $this->editorStyles();
    $this->styles();

    register_block_type( $bag->getBlockJSONFilePath( $this->id() ) );

  }

  public function script(): string {
    return "";
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

  public function orientation(): string{
    return apply_filters(Plugin::FILTER_COMPOSED_BLOCKS_ORIENTATION, $this->orientation, $this);
  }

  public function templateLock(): string{
    return apply_filters(Plugin::FILTER_COMPOSED_BLOCKS_TEMPLATE_LOCK, $this->templateLock, $this);
  }

  public function icon(): string{
    return "";
  }
  public function category(): string{
    return "";
  }

}