<?php

namespace Palasthotel\WordPress\BlockX\ComposedBlocks;


use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\Styles;

interface _IComposedBlockType {

  public function id(): BlockId;

  public function title(): string;

  public function script(): string;

  public function editorStyles(): Styles;

  public function styles(): Styles;

  public function templates(): array;

  public function allowedBlocks(): array;

  public function orientation(): string;

  public function templateLock(): string;

}