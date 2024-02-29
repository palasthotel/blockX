<?php

namespace Palasthotel\WordPress\BlockX;

use DirectoryIterator;
use Exception;
use Palasthotel\WordPress\BlockX\Blocks\_IBlockType;
use Palasthotel\WordPress\BlockX\Components\Component;
use Palasthotel\WordPress\BlockX\ComposedBlocks\_IComposedBlockType;
use Palasthotel\WordPress\BlockX\Containers\_IContainerType;
use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContainerStyles;

class BlockAssetsGenerator extends Component {

	public AssetGeneratorPaths $paths;

	public function onCreate() {
		$this->paths = new AssetGeneratorPaths(
			WP_CONTENT_DIR . "/blockx/",
			content_url( "blockx/" )
		);
		add_action( 'plugins_loaded', function () {
			do_action(
				Plugin::ACTION_ASSET_GENERATION_PATHS,
				$this->paths
			);
			$this->paths->system = rtrim( $this->paths->system, "/" ) . "/";
			$this->paths->url    = rtrim( $this->paths->url, "/" ) . "/";

		}, 99 );
	}

	private function getDirectoryPath( BlockId $id ): string {
		return $this->paths->system . $id . "/";
	}

	private function getDirectoryUrl( BlockId $id ): string {
		return $this->paths->url . $id . "/";
	}

	private function mkdir( BlockId $id ) {
		$containerIdPath = $this->getDirectoryPath( $id );
		try {
			if ( ! is_dir( $containerIdPath ) ) {
				mkdir( $containerIdPath, 0777, true );
			}
		} catch (Exception $e){
			error_log($e->getMessage());
		}
	}

	public function getBlockJSONFilePath( BlockId $id ): string {
		return $this->getDirectoryPath( $id ) . "block.json";
	}

	public function createBlockJSONIfNotExists( _IBlockType $block ) {
		$this->mkdir( $block->id() );
		$jsonFile = $this->getBlockJSONFilePath( $block->id() );
		if ( ! file_exists( $jsonFile ) || WP_DEBUG ) {
			if(!is_writable($this->getDirectoryPath($block->id() ))){
				return;
			}
			$currentContent = "";
			if(is_file($jsonFile)){
				$currentContent = file_get_contents($jsonFile);
			}
			$contents          = file_get_contents( $this->plugin->path . "assets/block/block.json" );
			$json              = json_decode( $contents );
			$json->name        = (string) $block->id();
			$json->title       = $block->title();
			$json->category    = $block->category();

			// scripts
			$editorScript = $block->editorScript();
			if(!empty($editorScript)){
				$json->editorScript = $editorScript;
			}
			$script = $block->script();
			if(!empty($script)){
				$json->script = $script;
			}
			$viewScript = $block->viewScript();
			if(!empty($viewScript)){
				$json->viewScript = $viewScript;
			}
			// styles
			$styles = $block->styles();
			if(!empty($styles)){
				$json->style = $styles->handles;
			}
			$editorStyles = $block->editorStyles();
			if(!empty($editorStyles)){
				$json->editorStyle = $editorStyles->handles;
			}
			$args = $block->registerBlockTypeArgs();
			foreach ($args as $key => $value){
				$json->{$key} = $value;
			}

			$encoded = json_encode( $json, JSON_PRETTY_PRINT+JSON_UNESCAPED_SLASHES );
			if($currentContent != $encoded){
				file_put_contents( $jsonFile, $encoded);
			}
		}
	}

	public function createContainerBlockJSONIfNotExists( _IContainerType $container ) {
		$this->mkdir( $container->id() );
		$jsonFile = $this->getBlockJSONFilePath( $container->id() );
		if ( ! file_exists( $jsonFile ) || WP_DEBUG  ) {
			if(!is_writable($this->getDirectoryPath($container->id() ))){
				return;
			}

			$currentContent = "";
			if(is_file($jsonFile)){
				$currentContent = file_get_contents($jsonFile);
			}

			$contents          = file_get_contents( $this->plugin->path . "assets/container/block.json" );
			$json              = json_decode( $contents );
			$json->name        = (string) $container->id();
			$json->title       = $container->title();
			$json->style       = $container->styles()->handles;
			$json->editorStyle = $container->editorStyles()->handles;

			$encoded = json_encode( $json, JSON_PRETTY_PRINT+JSON_UNESCAPED_SLASHES );
			if($currentContent != $encoded){
				file_put_contents( $jsonFile, $encoded);
			}
		}
	}

	public function createComposedBlockJSONIfNotExists( _IComposedBlockType $composedBlock ) {
		$this->mkdir( $composedBlock->id() );
		$jsonFile = $this->getBlockJSONFilePath( $composedBlock->id() );
		if ( ! file_exists( $jsonFile ) || WP_DEBUG  ) {
			if(!is_writable($this->getDirectoryPath($composedBlock->id() ))){
				return;
			}

			$currentContent = "";
			if(is_file($jsonFile)){
				$currentContent = file_get_contents($jsonFile);
			}

			$contents          = file_get_contents( $this->plugin->path . "assets/composedBlock/block.json" );
			$json              = json_decode( $contents );
			$json->name        = (string) $composedBlock->id();
			$json->title       = $composedBlock->title();
			$json->style       = $composedBlock->styles()->handles;
			$json->editorStyle = $composedBlock->editorStyles()->handles;

			$encoded = json_encode( $json, JSON_PRETTY_PRINT+JSON_UNESCAPED_SLASHES );
			if($currentContent != $encoded){
				file_put_contents( $jsonFile, $encoded);
			}
		}
	}

	public function getContainerStylesFilePath( BlockId $id, ContainerStyles $style ): string {
		return $this->getDirectoryPath( $id ) . $style->handle . ".css";
	}

	public function getContainerStylesUrl( BlockId $id, ContainerStyles $style ): string {
		return $this->getDirectoryUrl( $id ) . $style->handle . ".css";
	}

	public function createContainerStylesIfNotExists( _IContainerType $container, ContainerStyles $style ) {
		$this->mkdir( $container->id() );
		$styleFile = $this->getContainerStylesFilePath( $container->id(), $style );
		if ( ! file_exists( $styleFile ) || WP_DEBUG ) {
			if(!is_writable($this->getDirectoryPath($container->id()))){
				return;
			}

			$currentContent = "";
			if(is_file($styleFile)){
				$currentContent = file_get_contents($styleFile);
			}

			ob_start();
			include $this->plugin->path . "/scripts/container-styles.php";
			$css = ob_get_contents();
			ob_end_clean();

			if($currentContent != $css){
				file_put_contents( $styleFile, $css );
			}
		}
	}

	public function deleteAssets() {
		$this->deleteFilesThenSelf( $this->paths->system );
	}

	private function deleteFilesThenSelf( $folder ) {
		foreach ( new DirectoryIterator( $folder ) as $f ) {
			if ( $f->isDot() ) {
				continue;
			} // skip . and ..
			if ( $f->isFile() ) {
				unlink( $f->getPathname() );
			} else if ( $f->isDir() ) {
				$this->deleteFilesThenSelf( $f->getPathname() );
			}
		}
		rmdir( $folder );
	}
}
