<?php


namespace Palasthotel\WordPress\BlockX;


use Palasthotel\WordPress\BlockX\Components\Component;

class Settings extends Component {

	public function onCreate() {
		add_filter( 'plugin_action_links_' . $this->plugin->basename, array( $this, 'add_action_links' ) );
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_action( 'admin_init', array( $this, 'custom_settings' ) );
        add_action( 'wp_ajax_blockx_regenerate_containers' , [$this, 'regenerate_containers']);
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
		return array_merge(
			$links,
			array(
				sprintf(
					'<a href="%1$s">%2$s</a>',
					admin_url( 'options-general.php?page=blockx' ),
					__( 'Settings', Plugin::DOMAIN )
				)
			)
		);
	}

	/**
	 * register admin menu page for settings
	 */
	function admin_menu() {
		add_submenu_page(
			'options-general.php',
			__( "BlockX", Plugin::DOMAIN ),
			__( "BlockX", Plugin::DOMAIN ),
			"manage_options",
			"blockx",
			array( $this, 'render_settings_form' )
		);
	}

	/**
	 * register settings
	 */
	public function custom_settings() {

		add_settings_section(
			'blockx-container',
			'Container',
			"",
			'blockx'
		);

		add_settings_field(
			"regeneration",
			__( 'Assets', Plugin::DOMAIN ),
			array( $this, 'render_regenerate_assets' ),
			'blockx',
			'blockx-container'
		);

		add_settings_section(
			'blockx-auto',
			'Auto apply changes',
			null,
			'blockx'
		);

		register_setting(
			'blockx',
			Plugin::OPTION_AUTO_SAVE_TIMEOUT,
			function ( $val ) {
				// if is string it comes from form else it's set in code
				return is_string( $val ) ? intval( $val ) * 1000 : $val;
			}
		);
		add_settings_field(
			Plugin::OPTION_AUTO_SAVE_TIMEOUT,
			__( 'Timeout in seconds', Plugin::DOMAIN ),
			array( $this, 'render_auto_save_timeout' ),
			'blockx',
			'blockx-auto'
		);

	}

	/**
	 * render settings form
	 */
	function render_settings_form() {
		?>
        <div class="wrap">
            <h2><?php _e( 'Blockx', Plugin::DOMAIN ); ?></h2>
            <form method="post" action="options.php">
				<?php
				settings_fields( 'blockx' );
				do_settings_sections( 'blockx' );
				?>
				<?php submit_button(); ?>
            </form>
        </div>
		<?php
	}

	public function render_regenerate_assets() {
		$path = $this->plugin->bag->paths->system;
		$url  = $this->plugin->bag->paths->url;
        if( defined('DISALLOW_FILE_MODS') && DISALLOW_FILE_MODS){
            $info = __("File mods are disabled via DISALLOW_FILE_MODS constant.", Plugin::DOMAIN);
            echo '<input type="submit" disabled="disabled" class="button" value="Regenerate" title="'.$info.'" />';
        } else {
	        submit_button( "Regenerate", 'secondary', 'regenerate' );
	        $admin_ajax_url = admin_url("admin-ajax.php?action=blockx_regenerate_containers");
	        ?>
            <script>
                jQuery(function($){
                    $("[name=regenerate]").click(function(e){
                        e.preventDefault();
                        jQuery.ajax({
                            url: "<?php echo $admin_ajax_url; ?>",
                            success: function(res){
                                if(res.success){
                                    window.location.reload();
                                } else {
                                    console.debug(res);
                                    alert("Something went wrong.")
                                }

                            }
                        });
                    });
                });
            </script>
	        <?php
        }

		$description = sprintf(
			__( "block.json and CSS-Files will be deleted and regenerated to %s{namespace}/{name}/.", Plugin::DOMAIN ),
			$url
		);
		printf( "<p class='description'>%s</p>", $description );
		echo "<table>";
		echo "<thead>";
		echo "<tr>";
		echo "<th>Namespace</th>";
		echo "<th style='width: 340px;'>Name</th>";
		echo "</tr>";
		echo "</thead>";
		echo "<tbody>";

		$directories = scandir( $path );

		foreach ( $directories as $domain ) {
			if ( $domain == "." || $domain == ".." ) {
				continue;
			}
			$containers = scandir( $path . "/$domain" );
			foreach ( $containers as $container ) {
				if ( $container == "." || $container == ".." ) {
					continue;
				}
                $time = "";
                $file = $path."/$domain/$container/block.json";
                if(file_exists($file)){
                    $time = date("Y-m-d H:i:s",filemtime($file));
                }
				echo "<tr>";
				echo "<td>$domain</td>";
				echo "<td>";
                echo "$container<br/>";
				echo "&nbsp;&nbsp;&nbsp;<span style='font-size: 0.7rem;'>($time)</span><br/>";
                echo "&nbsp;&nbsp;&nbsp;/block.json<br/>";
                echo "&nbsp;&nbsp;&nbsp;/{$domain}_{$container}.css";
                echo "</td>";
				echo "</tr>";
			}

		}
		echo "</tbody>";
		echo "</table>";
	}

    public function regenerate_containers(){
        if(!current_user_can("manage_options")) return;
        $this->plugin->bag->deleteAssets();
        wp_send_json_success();
        exit;
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
				"Changes of the block settings will be automatically applied. 0 means no auto apply of changes at all.",
				Plugin::DOMAIN
			)
		);
	}

}