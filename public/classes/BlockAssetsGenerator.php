<?php

namespace Palasthotel\WordPress\BlockX;

use Palasthotel\WordPress\BlockX\Components\Component;
use Palasthotel\WordPress\BlockX\Containers\_IContainerType;
use Palasthotel\WordPress\BlockX\Model\Style;

class BlockAssetsGenerator extends Component {

	/**
	 * @var AssetGeneratorPaths
	 */
	private $paths;

	public function onCreate() {
		$this->paths = new AssetGeneratorPaths(
			WP_CONTENT_DIR."/blockx/",
			content_url("blockx/")
		);
		add_action( 'plugins_loaded', function () {
			do_action(
				Plugin::ACTION_ASSET_GENERATION_PATHS,
				$this->paths
			);
			$this->paths->system = rtrim($this->paths->system,"/")."/";
			$this->paths->url = rtrim($this->paths->url,"/")."/";

		}, 99);
	}

	/**
	 * @param _IContainerType $container
	 *
	 * @return string
	 */
	private function getDirectoryPath( _IContainerType $container ) {
		return $this->paths->system . $container->id()."/";
	}

	/**
	 * @param _IContainerType $container
	 *
	 * @return string
	 */
	private function getDirectoryUrl( _IContainerType $container ) {
		return $this->paths->url . $container->id()."/";
	}

	/**
	 * @param _IContainerType $container
	 */
	private function mkdir( _IContainerType $container ) {
		$containerIdPath = $this->getDirectoryPath( $container );
		if ( ! is_dir( $containerIdPath ) ) {
			mkdir( $containerIdPath, 0777, true );
		}
	}

	public function getBlockJSONFilePath( _IContainerType $container ): string {
		return $this->getDirectoryPath( $container ) . "block.json";
	}

	public function getContainerStylesFilePath( _IContainerType $container, Style $style ): string {
		return $this->getDirectoryPath( $container ) . $style->handle . ".css";
	}

	public function getContainerStylesUrl( _IContainerType $container, Style $style ): string {
		return $this->getDirectoryUrl( $container ) . $style->handle . ".css";
	}

	/**
	 * @param _IContainerType $container
	 */
	public function createBlockJSONIfNotExists( _IContainerType $container ) {
		$this->mkdir( $container );
		$jsonFile = $this->getBlockJSONFilePath( $container );
		if ( WP_DEBUG || ! file_exists( $jsonFile ) ) {
			$contents          = file_get_contents( $this->plugin->path . "assets/container/block.json" );
			$json              = json_decode( $contents );
			$json->name        = (string) $container->id();
			$json->title       = $container->title();
			$json->style       = (string) $container->style();
			$json->editorStyle = (string) $container->editorStyle();
			file_put_contents( $jsonFile, json_encode( $json, JSON_PRETTY_PRINT ) );
		}
	}

	public function createContainerStylesIfNotExists( _IContainerType $container, Style $style ) {
		$this->mkdir( $container );
		$styleFile = $this->getContainerStylesFilePath( $container, $style );
		if ( WP_DEBUG || ! file_exists( $styleFile ) ) {
			ob_start();
			include $this->plugin->path . "/scripts/container-styles.php";
			$css = ob_get_contents();
			ob_end_clean();
			file_put_contents( $styleFile, $css );
		}
	}
}