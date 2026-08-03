<?php

namespace Palasthotel\WordPress\BlockX\Containers;

use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\Styles;

interface _IContainerType {

	public function id(): BlockId;

	public function title(): string;

	public function columns(): array;

	public function editorStyles(): Styles;

	public function styles(): Styles;

}