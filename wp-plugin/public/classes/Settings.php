<?php


namespace Palasthotel\WordPress\BlockX;


use Palasthotel\WordPress\BlockX\Components\Component;
use Palasthotel\WordPress\BlockX\Containers\_IContainerType;

class Settings extends Component {

	const REGENERATE_ACTION = 'blockx_regenerate_containers';

	public function onCreate() {
		add_filter( 'plugin_action_links_' . $this->plugin->basename, array( $this, 'add_action_links' ) );
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_action( 'admin_init', array( $this, 'custom_settings' ) );
		add_action( 'wp_ajax_' . self::REGENERATE_ACTION, [ $this, 'regenerate_containers' ] );
	}

	public static function isCoreContainerEnabled( _IContainerType $container ) {
		$enabledContainers = static::getEnabledCoreContainers();

		return in_array( (string) $container->id(), $enabledContainers );
	}

	public static function getEnabledCoreContainers() {
		return get_option( Plugin::OPTION_ENABLED_CORE_CONTAINERS, [] );
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
					__( 'Settings', 'blockx' )
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
			__( "BlockX", 'blockx' ),
			__( "BlockX", 'blockx' ),
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
			__('Container', 'blockx'),
			"",
			'blockx'
		);

		register_setting(
			'blockx',
			Plugin::OPTION_ENABLED_CORE_CONTAINERS,
			[
				"type"              => "array",
				"default"           => [],
				"sanitize_callback" => function ( $val ) {
					return is_array( $val ) ? $val : [];
				}
			]
		);

		add_settings_field(
			"regeneration",
			__( 'Assets', 'blockx' ),
			array( $this, 'render_regenerate_assets' ),
			'blockx',
			'blockx-container'
		);

		add_settings_field(
			"types",
			__( 'Types', 'blockx' ),
			array( $this, 'render_types' ),
			'blockx',
			'blockx-container'
		);


		add_settings_section(
			'blockx-auto',
			__('Auto apply changes', 'blockx'),
			null,
			'blockx'
		);

		register_setting(
			'blockx',
			Plugin::OPTION_AUTO_SAVE_TIMEOUT,
			[
				"type"              => "integer",
				"default"           => 0,
				"sanitize_callback" => function ( $val ) {
					// if is string it comes from form else it's set in code
					return is_string( $val ) ? intval( $val ) * 1000 : $val;
				}
			]
		);
		add_settings_field(
			Plugin::OPTION_AUTO_SAVE_TIMEOUT,
			__( 'Timeout in seconds', 'blockx' ),
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
            <h2><?php _e( 'Blockx', 'blockx' ); ?></h2>
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

	public function render_types() {

		echo "<table>";
		echo "<thead>";
		echo "<tr>";
        echo "<th style='width: 80px;'>".__("Enabled", 'blockx')."</th>";
		echo "<th style='width: 120px;'>Namespace</th>";
		echo "<th style='width: 340px;'>Name</th>";
		echo "</tr>";
		echo "</thead>";
		echo "<tbody>";

		$containerTypes    = $this->plugin->gutenberg->getCoreContainerTypes();

		foreach ( $containerTypes as $container ) {

            $id = $container->id();
            $name = $id->name;
            $namespace = $id->namespace;

			echo "<tr>";

            $inputName = Plugin::OPTION_ENABLED_CORE_CONTAINERS;
            $checked = static::isCoreContainerEnabled($container) ? "checked": "";
            printf(
                "<td><input type='checkbox' name='%s[]' value='%s' %s /></td>",
                esc_attr( $inputName ),
                esc_attr( (string) $id ),
                $checked
            );

			printf( "<td style='vertical-align: top;'>%s</td>", esc_html( $namespace ) );
			printf( "<td style='vertical-align: top;'>%s</td>", esc_html( $name ) );
			echo "</tr>";
		}


		echo "</tbody>";
		echo "</table>";
	}

	public function render_regenerate_assets() {
		$path = $this->plugin->bag->paths->system;
		$url  = $this->plugin->bag->paths->url;
		if ( defined( 'BLOCKX_DISALLOW_BLOCK_JSON_GENERATION' ) && BLOCKX_DISALLOW_BLOCK_JSON_GENERATION ) {
			$info = __( "Blockx block.json generation is disabled via BLOCKX_DISALLOW_BLOCK_JSON_GENERATION constant.", 'blockx' );
			printf(
				'<input type="submit" disabled="disabled" class="button" value="Regenerate" title="%s" />',
				esc_attr( $info )
			);
            printf( "<p class='description'>%s</p>", esc_html( $info ) );
		} else {
			submit_button( "Regenerate", 'secondary', 'regenerate' );
			$admin_ajax_url = add_query_arg(
				array(
					'action'   => self::REGENERATE_ACTION,
					'_wpnonce' => wp_create_nonce( self::REGENERATE_ACTION ),
				),
				admin_url( 'admin-ajax.php' )
			);
			?>
            <script>
                jQuery(function ($) {
                    $("[name=regenerate]").click(function (e) {
                        e.preventDefault();
                        jQuery.ajax({
                            url: <?php echo wp_json_encode( $admin_ajax_url ); ?>,
                            method: "POST",
                            success: function (res) {
                                if (res.success) {
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
			__( "block.json and CSS-Files will be deleted and regenerated to %s{namespace}/{name}/.", 'blockx' ),
			$url
		);
		printf( "<p class='description'>%s</p>", esc_html( $description ) );
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
				$file = $path . "/$domain/$container/block.json";
				if ( file_exists( $file ) ) {
					// wp_date honours the site timezone, date() does not.
					$time = wp_date( "Y-m-d H:i:s", filemtime( $file ) );
				}

				printf( "<td style='vertical-align: top;'>%s</td>", esc_html( $domain ) );
				echo "<td style='vertical-align: top;'>";
				printf( "%s<br/>", esc_html( $container ) );
				printf(
					"&nbsp;&nbsp;&nbsp;<span style='font-size: 0.7rem;'>(%s)</span><br/>",
					esc_html( $time )
				);
				echo "&nbsp;&nbsp;&nbsp;/block.json<br/>";
				printf( "&nbsp;&nbsp;&nbsp;/%s_%s.css", esc_html( $domain ), esc_html( $container ) );
				echo "</td>";
				echo "</tr>";
			}

		}
		echo "</tbody>";
		echo "</table>";
	}

	public function regenerate_containers() {
		if ( ! current_user_can( "manage_options" ) ) {
			wp_send_json_error( null, 403 );
		}
		// The capability alone is not enough: without a nonce any page could make
		// a logged-in administrator's browser call this and delete the generated
		// assets. check_ajax_referer dies on failure.
		check_ajax_referer( self::REGENERATE_ACTION );
		$this->plugin->bag->deleteAssets();
		wp_send_json_success();
	}

	/**
	 * render the setting field
	 */
	public function render_auto_save_timeout() {
		$val = Settings::getAutoSaveTimeout() / 1000;
		printf(
			"<input type='number' min='0' value='%s' name='%s' />",
			esc_attr( (string) $val ),
			esc_attr( Plugin::OPTION_AUTO_SAVE_TIMEOUT )
		);
		printf(
			"<p class='description'>%s</p>",
			__(
				"Changes of the block settings will be automatically applied. 0 means no auto apply of changes at all.",
				'blockx'
			)
		);
	}

}