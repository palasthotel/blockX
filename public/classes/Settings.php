<?php


namespace Palasthotel\WordPress\BlockX;


class Settings extends _Component {
	public function onCreate() {
		parent::onCreate();
		add_filter( 'plugin_action_links_' . $this->plugin->basename, array( $this, 'add_action_links' ) );
		add_action( 'admin_init', array( $this, 'custom_settings' ) );
	}

	public static function getAutoSaveTimeout() {
		return intval( get_option( Plugin::OPTION_AUTO_SAVE_TIMEOUT, 0 ) );
	}

	/**
	 * action link to settings on plugins list page
	 *
	 * @param $links
	 *
	 * @return array
	 */
	public function add_action_links( $links ) {
		return array_merge( $links, array(
			'<a href="' . admin_url( 'options-writing.php#' . Plugin::DOMAIN ) . '">Settings</a>'
		) );
	}

	/**
	 * register settings
	 */
	public function custom_settings() {
		add_settings_section(
			'blockx-settings',
			'BlockX',
			function () {
				echo "<span id='" . Plugin::DOMAIN . "'></span>";
			},
			'writing'
		);

		register_setting(
			'writing',
			Plugin::OPTION_AUTO_SAVE_TIMEOUT,
			function ( $val ) {
				// if is string it comes from form else it's set in code
				return is_string($val) ?  intval( $val ) * 1000 : $val;
			}
		);
		add_settings_field(
			Plugin::OPTION_AUTO_SAVE_TIMEOUT,
			__( 'Autosave timeout', Plugin::DOMAIN ),
			array( $this, 'render_auto_save_timeout' ),
			'writing',
			'blockx-settings'
		);

	}

	/**
	 * render the setting field
	 */
	public function render_auto_save_timeout() {
		$val = Settings::getAutoSaveTimeout() / 1000;
		echo "<input type='number' min='0' value='$val' name='" . Plugin::OPTION_AUTO_SAVE_TIMEOUT . "' />";
		printf(
			"<p class='description'>%s</p>",
			__(
				"In seconds. 0 means no autosave at all. This does NOT save the post but applies the block changes to the content preview.",
				Plugin::DOMAIN
			)
		);
	}

}