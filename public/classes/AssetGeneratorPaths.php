<?php

namespace Palasthotel\WordPress\BlockX;

/**
 * @property $system
 * @property $url
 */
class AssetGeneratorPaths {
	public function __construct(string $absoluteSystemPath, string $publicBrowserUrl) {
		$this->system = $absoluteSystemPath;
		$this->url    = $publicBrowserUrl;
	}
}