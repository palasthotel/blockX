<?php

namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Gutenberg;
use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContentStructure;
use Palasthotel\WordPress\BlockX\Model\Option;
use Palasthotel\WordPress\BlockX\Model\StateLabel;
use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Utils\PostUrlSuggestionProvider;
use Palasthotel\WordPress\BlockX\Widgets\AutoComplete;
use Palasthotel\WordPress\BlockX\Widgets\AutoSuggest;
use Palasthotel\WordPress\BlockX\Widgets\Divider;
use Palasthotel\WordPress\BlockX\Widgets\Hidden;
use Palasthotel\WordPress\BlockX\Widgets\Info;
use Palasthotel\WordPress\BlockX\Widgets\Media;
use Palasthotel\WordPress\BlockX\Widgets\Panel;
use Palasthotel\WordPress\BlockX\Widgets\Post;
use Palasthotel\WordPress\BlockX\Widgets\Url;
use Palasthotel\WordPress\BlockX\Widgets\User;
use Palasthotel\WordPress\BlockX\Widgets\Read_Only;
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

			Info::build( "This is just some Info text This is some more information text so it will be more than one line." ),

			// ------------------------------------
			// simple values
			// ------------------------------------
			Text::build( "text", "Text", "Default text" ),
			Text::build( "multilinetext", "Text with rows", "Default text" )
			    ->rows( 3 )
			    ->help( "you can use multiline" ),

			Info::build( "This is just some Info text" ),

			Textarea::build( "textarea", "Textarea", "Just wrapper around text" ),
			Number::build( "number", "Number", 42 ),

			Read_Only::build( "readonly", "Read_Only", "not writable" ),

			Hidden::build( "hidden", "is a hidden random value " . rand( 1, 99 ) ),

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
			], [ "option1" ] )->multiple( true ),

			Select::build( "post_type", "Select post type", Gutenberg::getPostTypeOptions(), "post" ),
			Select::build( "taxonomies", "Select a taxonomy", Gutenberg::getTaxonomyOptions() ),

			Divider::build(),

			// ------------------------------------
			// media
			// ------------------------------------
			Media::build( "default_image", "Default Media" ),

			Media::build( "image_with_file_type", "File types" )
			     ->mediaTypes( [ "image", "application/pdf" ] ),

			Media::build( "media_pdf", "PDF only" )
			     ->mediaTypes( [ "application/pdf" ] ),

			Media::build( "multiple_images", "Multiple images" )
			     ->mediaTypes( [ "image" ] )
			     ->multiple( true )
			     ->mediaUploadTitle( "Multiple files" ),

			Media::build( "sized_image", "Media with size restrictions" )
				->multiple(true)
			     ->minWidth( 300 )->maxWidth( 1000 )
			     ->minHeight( 100 )->maxHeight( 1000 ),

			Divider::build(),

			// ------------------------------------
			// post relation
			// ------------------------------------

			Post::build( "post_id", "Post relation" )->postTypes( [ "post", "uebung" ] ),

			Divider::build(),

			// ------------------------------------
			// user relation
			// ------------------------------------

			User::build( "user_id", "User relation" )
			    ->roles( [ "administrator", "editor", "author", "contributor", "subscriber" ] ),

			Divider::build(),

			// ------------------------------------
			// auto suggest and completes
			// ------------------------------------
			AutoSuggest::build( "auto_suggest_post", "AutoSuggests" )
			           ->useProvider( PostUrlSuggestionProvider::build() ),

			AutoComplete::build( "auto_complete_post", "AutoCompletes" )
				->useProvider( PostUrlSuggestionProvider::build() ),

			Url::build( "post_url", "Post Url" ),
			Url::build( "page_url", "Page Url" )
			   ->useProvider( PostUrlSuggestionProvider::build()->postTypes(["page"]) ),

			// ------------------------------------
			// taxonomies
			// ------------------------------------
			TaxonomyTerm::build( "taxonomy_term", "Select single tax term", "category" ),
			TaxonomyTerm::build( "taxonomy_terms", "Multiple tax Terms", "post_tag" )->multiple( true ),
			TaxQuery::build( "tax_query", "Tax Query", Plugin::instance()->assets->getTaxonomies() ),

			Divider::build(),

			// ------------------------------------
			// advanced
			// ------------------------------------
			Panel::build( "Empty panel", new ContentStructure( [
			] ) ),

			Panel::build( "Collapsible content", new ContentStructure( [
				Number::build( "offset2", "Offset 2", 0 ),
				Url::build( "panel_url", "Url" ),
			] ) ),

			ListOf::build( "list", "List of things", [
				Post::build( "post_id", "Post" ),
				Number::build( "offset", "Offset", 4 ),
				Url::build( "url", "Url" ),
				AutoSuggest::build( "auto_suggest_page", "AutoSuggests" )
				           ->useProvider( PostUrlSuggestionProvider::build()->postTypes(["page"]) ),
				ListOf::build( "second_list", "Sublist", [
					Url::build( "url", "Url" ),
					Text::build( "title", "Title" ),
				] ),
			] )->max(3),

			ListOf::build("min_list", "Min list",[
				Text::build("item", "Item")
			])->min(2),

			ListOf::build("max_list", "Max list",[
				Text::build("item", "Item")
			])->max(2),

			ListOf::build("exact_list", "Exact list",[
				Text::build("item", "Item")
			])->exact(2),

		] );
	}

}
