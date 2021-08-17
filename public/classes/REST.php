<?php


namespace Palasthotel\WordPress\BlockX;

use Palasthotel\WordPress\BlockX\Blocks\_IBlockType;
use Palasthotel\WordPress\BlockX\Components\Component;
use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Widgets\_AjaxWidget;
use Palasthotel\WordPress\BlockX\Widgets\_IWidget;
use Palasthotel\WordPress\BlockX\Widgets\_IWidgetGroup;
use Palasthotel\WordPress\BlockX\Widgets\Panel;
use WP_Post;
use WP_REST_Request;
use WP_REST_Server;

class REST extends Component {

	const NAMESPACE = "blockx/v1";

	public function onCreate() {
		add_action( 'rest_api_init', array( $this, 'init_rest_api' ) );
	}

	public function init_rest_api() {
		register_rest_route(
			static::NAMESPACE,
			'/ssr',
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'ssr' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_posts' );
				},
				'args'                => [
					"blocks"  => array(
						'validate_callback' => function ( $value, $request, $param ) {
							return ! isset( $value ) || is_array( $value );
						},
						'default'           => [],
					),
					"post_id" => array(
						'sanitize_callback' => function ( $value, $request, $param ) {
							return intval( $value );
						},
					)
				]
			)
		);
		register_rest_route(
			static::NAMESPACE,
			'/query',
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'query' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_posts' );
				},
				'args'                => [
					"s"              => array(
						'required'          => true,
						'type'              => 'string',
						'validate_callback' => function ( $value, $request, $param ) {
							return is_string( $value );
						},
						'sanitize_callback' => function ( $value ) {
							return sanitize_text_field( $value );
						},
					),
					"post_type"      => array(
						'type'              => 'string',
						'validate_callback' => function ( $value, $request, $param ) {
							return is_string( $value ) && strlen( $value );
						},
						'sanitize_callback' => function ( $value ) {
							return sanitize_text_field( $value );
						},
						'default'           => 'post',
					),
					"post_status"    => array(
						'type'              => 'string',
						'validate_callback' => function ( $value, $request, $param ) {
							return is_string( $value ) && strlen( $value );
						},
						'sanitize_callback' => function ( $value ) {
							return sanitize_text_field( $value );
						},
						'default'           => 'publish',
					),
					"block_instance" => array(
						'validate_callback' => function ( $value, $request, $param ) {
							return ! isset( $value ) || is_array( $value );
						},
						'default'           => [],
					),
				]
			)
		);
		register_rest_route(
			static::NAMESPACE,
			'/get/(?P<id>\d+)',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_posts' );
				},
				'args'                => [
					"id" => array(
						'required'          => true,
						'validate_callback' => function ( $param, $request, $key ) {
							return is_numeric( $param );
						},
					),
				]
			)
		);
		register_rest_route(
			static::NAMESPACE,
			'/ajax/(?P<block_ns>[\S]+)/(?P<block_id>[\S]+)/(?P<widget_key_path>[\S.]+)',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'ajax' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_posts' );
				},
				'args'                => [
					"block_ns" => array(
						'required'          => true,
						'validate_callback' => function ( $param, $request, $key ) {
							return is_string( $param );
						},
						'sanitize_callback' => function($param){
							return sanitize_text_field($param);
						}
					),
					"block_id" => array(
						'required'          => true,
						'validate_callback' => function ( $param, $request, $key ) {
							return is_string( $param );
						},
						'sanitize_callback' => function($param){
							return sanitize_text_field($param);
						}
					),
					"widget_key_path" => array(
						'required'          => true,
						'validate_callback' => function ( $param, $request, $key ) {
							return is_string( $param );
						},
						'sanitize_callback' => function($param){
							return sanitize_text_field($param);
						}
					),
					"query" => [
						'required'          => true,
						'validate_callback' => function ( $param, $request, $key ) {
							return is_string( $param );
						},
						'sanitize_callback' => function($param){
							return sanitize_text_field($param);
						}
					]
				]
			)
		);
	}

	public function ssr( WP_REST_Request $request ) {

		define( 'BLOCK_X_IS_EDITOR_SSR', true );

		$blocks  = $request->get_param( "blocks" );
		$post_id = $request->get_param( "post_id" );

		// setup post context if exists
		$query = new \WP_Query( [
			"p"           => $post_id,
			"post_type"   => "any",
			"post_status" => [ "draft", "future", "publish" ],
			"suppress_filers" => false, //needed for wpml
		] );
		if ( $query->have_posts() ) {
			$query->the_post();
		}

		$res = [];

		foreach ( $blocks as $hash => $obj ) {
			$id         = $obj["id"];
			$attributes = $obj["attributes"];
			$blockType  = $this->plugin->gutenberg->getBlockType( $id );
			if ( false === $blockType ) {
				$res[ $hash ] = false;
				continue;
			}
			$res[ $hash ] = $blockType->build( $attributes, "" );
		}

		wp_reset_postdata();

		return $res;
	}

	public function query( WP_REST_Request $request ) {
		$s = $request->get_param( "s" );

		$post_type      = explode( ",", $request->get_param( "post_type" ) );
		$post_status    = explode( ",", $request->get_param( "post_status" ) );
		$block_instance = $request->get_param( "block_instance" );

		$args = apply_filters( Plugin::FILTER_REST_POSTS_QUERY_ARGS, [
			"s"              => $s,
			"post_type"      => $post_type,
			"post_status"    => $post_status,
			"posts_per_page" => 50,
			"suppress_filers" => false, //needed for wpml
		], $block_instance );

		$posts = get_posts( $args );
		$posts = apply_filters( Plugin::FILTER_REST_POSTS, $posts, $request, $block_instance, $args );

		if ( intval( $s ) . "" == $s ) {
			$candidate = get_posts( [
				"p"           => $s,
				"post_type"   => $post_type,
				"post_status" => $post_status,
			] );

			if ( count( $candidate ) === 1 ) {
				array_unshift( $posts, $candidate[0] );
			}
		}

		return array_map( function ( WP_Post $post ) {
			return [
				"ID"         => $post->ID,
				"post_title" => $post->post_title,
				"post_type"  => $post->post_type,
			];
		}, $posts );
	}

	public function get( WP_REST_Request $request ) {
		$id   = $request->get_param( "id" );
		$post = get_post( $id );
		if ( ! ( $post instanceof WP_Post ) ) {
			return new \WP_Error( "no_post", __( "No post found.", Plugin::DOMAIN ), [ "status" => 404 ] );
		}

		return [
			"ID"         => $post->ID,
			"post_title" => $post->post_title,
		];
	}

	public function ajax( WP_REST_Request $request ){
		$blockNamespace = $request->get_param("block_ns");
		$blockNamespaceId = $request->get_param("block_id");
		$widgetKeyPath = $request->get_param("widget_key_path");
		$query = $request->get_param("query");
		$keyParts = explode(".",$widgetKeyPath);

		$blockId = BlockId::build($blockNamespace, $blockNamespaceId);
		$blockType = $this->plugin->gutenberg->getBlockType( $blockId );
		if(!($blockType instanceof _IBlockType)){
			return new \WP_Error("BlockType not found.");
		}
		$widgets = $blockType->contentStructure()->getItems();

		$widget = null;
		for ($i = 0; $i < count($keyParts); $i++){
			$key = $keyParts[$i];
			$widget = $this->findWidget($key, $widgets);
			if($widget instanceof _IWidgetGroup){
				$widgets = $widget->contentStructure()->getItems();
				continue;
			}
			break;
		}

		if($widget instanceof _AjaxWidget){
			return apply_filters(
				Plugin::FILTER_REST_AJAX,
				$widget->ajax($query),
				$request,
				$widget
			);
		}

		return  new \WP_Error("Invalid widget type");
	}

	/**
	 * @param string $key
	 * @param _IWidget[] $widgets
	 *
	 * @return false|_IWidget
	 */
	private function findWidget($key, $widgets){
		foreach ($widgets as $item){
			if($item instanceof Panel){
				$widget = $this->findWidget($key, $item->contentStructure()->getItems());
				if($widget instanceof _IWidget){
					return $widget;
				}
			} else if($item->key() == $key){
				return $item;
			}
		}
		return false;
	}

}
