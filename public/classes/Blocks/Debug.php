<?php

namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Gutenberg;
use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContentStructure;
use Palasthotel\WordPress\BlockX\Model\Option;
use Palasthotel\WordPress\BlockX\Model\StateLabel;
use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Widgets\Divider;
use Palasthotel\WordPress\BlockX\Widgets\Hidden;
use Palasthotel\WordPress\BlockX\Widgets\Media;
use Palasthotel\WordPress\BlockX\Widgets\Panel;
use Palasthotel\WordPress\BlockX\Widgets\Post;
use Palasthotel\WordPress\BlockX\Widgets\User;
use Palasthotel\WordPress\BlockX\Widgets\Readonly;
use Palasthotel\WordPress\BlockX\Widgets\Textarea;
use Palasthotel\WordPress\BlockX\Widgets\Toggle;
use Palasthotel\WordPress\BlockX\Widgets\ListOf;
use Palasthotel\WordPress\BlockX\Widgets\Number;
use Palasthotel\WordPress\BlockX\Widgets\Select;
use Palasthotel\WordPress\BlockX\Widgets\TaxonomyTerm;
use Palasthotel\WordPress\BlockX\Widgets\TaxQuery;
use Palasthotel\WordPress\BlockX\Widgets\Text;

class Debug extends _BlockType {

	public function id(): BlockId {
		return BlockId::build( "blockx", "debug" );
	}

	public function title(): string {
		return __( "Debug", Plugin::DOMAIN );
	}

	public function category(): string {
		return "embed";
	}

	public function registerBlockTypeArgs(): array {
		$args                = parent::registerBlockTypeArgs();
		$args["description"] = __( "This block is just for debugging.", Plugin::DOMAIN );
		$args["icon"]        = 'games';
		$args['supports']    = [
			"align" => true,
		];

		return $args;
	}

	public function contentStructure(): ContentStructure {

		return new ContentStructure( [

			// ------------------------------------
			// simple values
			// ------------------------------------
			Text::build( "text", "Text", "Default text" ),
			Text::build( "multilinetext", "Text with rows", "Default text" )
			    ->rows( 3 )
			    ->help( "you can use multiline" ),

			Textarea::build( "textarea", "Textarea", "Just wrapper around text" ),
			Number::build( "number", "Number", 42 ),

			Readonly::build( "readonly", "Readonly", "not writable" ),

			Hidden::build( "hidden", "is a hidden random value ".rand(1,99) ),

			Divider::build(),

			// ------------------------------------
			// boolean values
			// ------------------------------------
			Toggle::build( "checkbox", "On or off", true ),

			Toggle::build( "checkbox_with_help", "On or off", true )
			      ->help( "Additional information about this" ),

			Toggle::build(
				"checkbox_with_states",
				StateLabel::build( "On", "Off" ),
				true )
			      ->help( StateLabel::build(
				      "This thing is on and will be true in content object",
				      "This thing is off and will be false in content object"
			      ) ),

			Divider::build(),

			// ------------------------------------
			// select from a list of options
			// ------------------------------------
			Select::build( "select", "Select", [
				Option::build( "option1", "Option 1" ),
				Option::build( "option2", "Option 2" ),
				Option::build( "option3", "Option 3" ),
			], "option2" ),

			Select::build( "selectmultiple", "Select multiple", [
				Option::build( "option1", "Option 1" ),
				Option::build( "option2", "Option 2" ),
				Option::build( "option3", "Option 3" ),
			], ["option1"] ) ->multiple(true),

			Select::build( "post_type", "Select post type", Gutenberg::getPostTypeOptions(), "post" ),
			Select::build( "taxonomies", "Select a taxonomy", Gutenberg::getTaxonomyOptions() ),

			Divider::build(),

			// ------------------------------------
			// media
			// ------------------------------------
			Media::build( "default_image", "Default Media" ),

			Media::build( "image_with_file_type", "File types" )
			     ->setMediaTypes( [ "image", "application/pdf" ] ),

			Media::build( "media_pdf", "PDF only" )
			     ->setMediaTypes( [ "application/pdf" ] ),

			Media::build( "multiple_images", "Multiple images" )
			     ->setMediaTypes( [ "image" ] )
			     ->multiple( true )
			     ->setMediaUploadTitle( "Multiple files" ),

			Divider::build(),

			// ------------------------------------
			// post relation
			// ------------------------------------

			Post::build( "post_id", "Post relation" )->postTypes( [ "post", "uebung" ] ),

			Divider::build(),

			// ------------------------------------
			// user relation
			// ------------------------------------

			User::build( "user_id", "User relation" )->setUserRoles( [ "administrator", "editor", "author", "contributor", "subscriber" ]),

			Divider::build(),

			// ------------------------------------
			// taxonomies
			// ------------------------------------
			TaxonomyTerm::build( "taxonomy_term", "Select single tax term", "category" ),
			TaxonomyTerm::build( "taxonomy_terms", "Multiple tax Terms", "category" )->multiple( true ),
			TaxQuery::build( "tax_query", "Tax Query", Plugin::instance()->assets->getTaxonomies() ),

			Divider::build(),

			// ------------------------------------
			// advanced
			// ------------------------------------
			Panel::build( "Collapsible content", new ContentStructure( [
				Number::build( "offset2", "Offset 2", 0 ),
			] ) ),

			ListOf::build( "list", "List of things", [
				Post::build( "post_id", "Post" ),
				Number::build( "offset", "Offset", 4 ),
				ListOf::build( "second_list", "Sublist", [
					Text::build( "title", "Title" ),
				] ),
			] ),

		] );
	}

}