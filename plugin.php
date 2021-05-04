<?php


/**
 * Plugin Name:       BlockX - DEV
 * Description:       Dev inc file
 * Version:           X.X.X
 * Requires at least: X.X
 * Tested up to:      X.X.X
 * Author:            PALASTHOTEL by Edward
 * Author URI:        http://www.palasthotel.de
 * Domain Path:       /plugin/languages
 */

include dirname( __FILE__ ) . "/public/plugin.php";

register_activation_hook(__FILE__, function($multisite){
	\Palasthotel\WordPress\BlockX\Plugin::instance()->onActivation($multisite);
});

register_deactivation_hook(__FILE__, function($multisite){
	\Palasthotel\WordPress\BlockX\Plugin::instance()->onDeactivation($multisite);
});