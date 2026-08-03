<?php

namespace Palasthotel\WordPress\BlockX;

class AssetGeneratorPaths {
	public string $system;
	public string $url;

	public function __construct(string $absoluteSystemPath, string $publicBrowserUrl) {
		$this->system = $absoluteSystemPath;
		$this->url    = $publicBrowserUrl;
	}
}
