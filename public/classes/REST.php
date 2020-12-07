<?php


namespace Palasthotel\WordPress\BlockX;

use Palasthotel\WordPress\BlockX\Model\BlockInstance;
use WP_REST_Request;
use WP_REST_Server;

class REST  extends _Component {

	const NAMESPACE = "blockx/v1";

	public function onCreate() {
		add_action( 'rest_api_init', array( $this, 'init_rest_api' ) );
	}

	public function init_rest_api(){
		register_rest_route(
			static::NAMESPACE,
			'/query',
			array(
				'methods'             => "POST",
				'callback'            => array( $this, 'get_items' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_posts' );
				},
				'args'                => [
					"s" => array(
						'required' => true,
						'type' => 'string',
						'validate_callback' => function ( $value, $request, $param ) {
							return is_string( $value );
						},
						'sanitize_callback' => function ( $value ) {
							return sanitize_text_field( $value );
						},
					),
					"post_type" => array(
						'type' => 'string',
						'validate_callback' => function ( $value, $request, $param ) {
							return is_string( $value ) && strlen( $value );
						},
						'sanitize_callback' => function ( $value ) {
							return sanitize_text_field( $value );
						},
						'default' => 'post',
					),
					"post_status" => array(
						'type' => 'string',
						'validate_callback' => function ( $value, $request, $param ) {
							return is_string( $value ) && strlen( $value );
						},
						'sanitize_callback' => function ( $value ) {
							return sanitize_text_field( $value );
						},
						'default' => 'publish',
					),
					"block_instance" => array(
						'validate_callback' => function ( $value, $request, $param ) {
							return !isset($value) || is_array( $value );
						},
						'default' => [],
					),
				]
			)
		);
	}

	public function get_items(WP_REST_Request $request){
		$s = $request->get_param("s");

		$post_type = explode(",",$request->get_param("post_type"));
		$post_status = explode(",", $request->get_param("post_status"));
		$block_instance = $request->get_param("block_instance");

		$args = apply_filters(Plugin::FILTER_REST_POSTS_QUERY_ARGS, [
			"s" => $s,
			"post_type" => $post_type,
			"post_status" => $post_status,
		], $block_instance);

		$posts = get_posts($args);
		$posts = apply_filters(Plugin::FILTER_REST_POSTS, $posts, $request, $block_instance);

		return array_map(function($post){
			return [
				"ID" => $post->ID,
				"post_title" => $post->post_title,
			];
		}, $posts);
	}

}