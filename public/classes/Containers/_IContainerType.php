<?php

namespace Palasthotel\WordPress\BlockX\Containers;

use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\Style;

interface _IContainerType {

	public function id(): BlockId;

	public function title(): string;

	public function columns(): array;

	public function editorStyle(): Style;

	public function style(): Style;

	public function useColumnsInMobilePreview(): bool;

	public function useColumnsInTabletPreview(): bool;

}