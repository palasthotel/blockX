<?php


namespace Palasthotel\WordPress\BlockX;

use WP_REST_Request;

class REST  extends _Component {

	const NAMESPACE = "blockx/v1";

	public function onCreate() {
		add_action( 'rest_api_init', array( $this, 'init_rest_api' ) );
	}

	public function init_rest_api(){
		register_rest_route(
			static::NAMESPACE,
			'/ssr',
			array(
				'methods'             => "POST",
				'callback'            => array( $this, 'ssr' ),
				'permission_callback' => function ( WP_REST_Request $request ) {
					return current_user_can( 'edit_posts' );
				},
				'args'                => [
					"blocks" => array(
						'validate_callback' => function ( $value, $request, $param ) {
							return !isset($value) || is_array( $value );
						},
						'default' => [],
					),
					"post_id" => array(
						'sanitize_callback' => function($value, $request, $param){
							return intval($value);
						},
					)
				]
			)
		);
		register_rest_route(
			static::NAMESPACE,
			'/query',
			array(
				'methods'             => "POST",
				'callback'            => array( $this, 'query' ),
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

	public function ssr(WP_REST_Request $request){
		$blocks = $request->get_param("blocks");
		$post_id = $request->get_param("post_id");

		// setup post context if exists
		$query = new \WP_Query([
			"p" => $post_id,
			"post_type" => "any",
			"post_status" => ["draft", "future", "publish"],
		]);
		if($query->have_posts()){
			$query->the_post();
		}

		$res = [];

		foreach ($blocks as $hash => $obj){
			$id = $obj["id"];
			$content = $obj["content"];
			$blockType = $this->plugin->gutenberg->getBlockType($id);
			if(false === $blockType){
				$res[$hash] = false;
				continue;
			}
			$res[$hash] = $blockType->build(["content"=>$content], "");
		}

		wp_reset_postdata();

		return $res;
	}

	public function query(WP_REST_Request $request){
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