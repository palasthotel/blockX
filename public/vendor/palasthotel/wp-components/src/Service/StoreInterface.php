<?php


namespace Palasthotel\WordPress\Service;


interface StoreInterface {
	public function set($id, $value);
	public function get($id);
	public function delete($id);
}