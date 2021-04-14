<?php


namespace Palasthotel\WordPress\BlockX;


class Update extends _Component {

	const DATA_VERSION = 1;

	public function onCreate() {
		parent::onCreate();
		add_action( 'admin_init', [ $this, 'update' ] );
	}

	public function getCurrentVersion() {
		return get_option( Plugin::OPTION_DATA_VERSION, 0 );
	}

	public function setCurrentVersion( $version ) {
		update_option( Plugin::OPTION_DATA_VERSION, $version );
	}

	public function update() {
		$current_version = $this->getCurrentVersion();

		for ( $i = $current_version + 1; $i <= self::DATA_VERSION; $i ++ ) {
			$method = "update_{$i}";
			if ( method_exists( $this, $method ) ) {
				$this->$method();
				$this->setCurrentVersion( $i );
			}
		}
	}

	public function update_1(){
		$this->plugin->database->createTable();
	}

}