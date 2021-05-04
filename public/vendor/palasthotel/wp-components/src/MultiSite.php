<?php


namespace Palasthotel\WordPress;


class MultiSite {
	public static function foreach(callable $onSite){
		if ( function_exists( 'is_multisite' ) && is_multisite() ) {
			$network_site = get_network()->site_id;
			$args         = array( 'fields' => 'ids' );
			$site_ids     = get_sites( $args );

			// run the activation function for each blog id
			foreach ( $site_ids as $site_id ) {
				switch_to_blog( $site_id );
				$onSite();
			}

			// switch back to the network site
			switch_to_blog( $network_site );
		}
	}
}