<?php


namespace Palasthotel\WordPress\BlockX\Components;


/**
 * @property string domain
 * @property string languages
 * @version 0.1.1
 */
class TextdomainConfig {

	public function __construct(string $domain, string $relativeLanguagesPath) {
		$this->domain = $domain;
		$this->languages = $relativeLanguagesPath;
	}
}