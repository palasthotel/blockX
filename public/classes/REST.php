<?php


namespace Palasthotel\WordPress\BlockX;

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
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_items' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_posts' );
				},
				'args'                => [
					"s" => array(
						'required' => true,
						'type' => 'string',
						'validate_callback' => function ( $value, $request, $param ) {
							return is_string( $value ) && strlen( $value );
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
				]
			)
		);
	}

	public function get_items(WP_REST_Request $request){
		$s = $request->get_param("s");
		$post_type = explode(",",$request->get_param("post_type"));
		return array_map(function($post){
			return [
				"ID" => $post->ID,
				"post_title" => $post->post_title,
			];
		},get_posts([
			"s" => $s,
			"post_type" => $post_type,
		]));
	}

}