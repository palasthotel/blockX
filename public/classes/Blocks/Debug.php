<?php


namespace Palasthotel\WordPress\BlockX\Blocks;

use Palasthotel\WordPress\BlockX\Gutenberg;
use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContentStructure;
use Palasthotel\WordPress\BlockX\Model\Option;
use Palasthotel\WordPress\BlockX\Model\StateLabel;
use Palasthotel\WordPress\BlockX\Plugin;
use Palasthotel\WordPress\BlockX\Widgets\Toggle;
use Palasthotel\WordPress\BlockX\Widgets\ListOf;
use Palasthotel\WordPress\BlockX\Widgets\Number;
use Palasthotel\WordPress\BlockX\Widgets\Select;
use Palasthotel\WordPress\BlockX\Widgets\TaxonomyTerm;
use Palasthotel\WordPress\BlockX\Widgets\TaxQuery;
use Palasthotel\WordPress\BlockX\Widgets\Text;
use stdClass;

class Debug extends _BlockType {

	public function id(): BlockId {
		return BlockId::build("blockx", "debug");
	}

	public function title(): string {
		return __("Debug", Plugin::DOMAIN);
	}

	public function category(): string {
		return "embed";
	}

	public function registerBlockTypeArgs(): array {
		$args = parent::registerBlockTypeArgs();
		$args["description"] = __("This block is just for debugging.", Plugin::DOMAIN);
		$args["icon"] = 'games';
		return $args;
	}

	public function contentStructure(): ContentStructure {

		return new ContentStructure([

			// ------------------------------------
			// simple values
			// ------------------------------------
			Text::build("text", "Text", "Default text"),
			Number::build("number", "Number", 42),

			// ------------------------------------
			// boolean values
			// ------------------------------------
			Toggle::build("checkbox", "On or off", true),

			Toggle::build("checkbox_with_help", "On or off", true)
			      ->help("Additional information about this"),

			Toggle::build(
				"checkbox_with_states",
				StateLabel::build("On", "Off"),
				true)
			      ->help(StateLabel::build(
			      	"This thing is on and will be true in content object",
			        "This thing is off and will be false in content object"
			        )),

			// ------------------------------------
			// select from a list of options
			// ------------------------------------
			Select::build("select", "Select", [
				Option::build("option1", "Option 1"),
				Option::build("option2", "Option 2"),
				Option::build("option3", "Option 3"),
			],"option2"),

			Select::build("post_type", "Select post type", Gutenberg::getPostTypeOptions(), "post"),
			Select::build("taxonomies", "Select a taxonomy", Gutenberg::getTaxonomyOptions()),

			// ------------------------------------
			// taxonomies
			// ------------------------------------
			TaxonomyTerm::build("taxonomy_term", "Select single tax term", "category"),
			TaxonomyTerm::build("taxonomy_terms", "Multiple tax Terms", "category")->multiple(true),
			TaxQuery::build("tax_query", "Tax Query", Plugin::instance()->assets->getTaxonomies()),

			// ------------------------------------
			// advanced
			// ------------------------------------
			Number::build("offset2", "Offset", 0),

			ListOf::build("list", "List of things", [
				Number::build("offset", "Offset", 0),
			])
			// post type
			// date?
		]);
	}

}