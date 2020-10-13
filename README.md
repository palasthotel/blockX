## BlockX

This plugin provides an easier way for developers to add new block types to WordPress Gutenberg Editor. You can add configuratable boxes and templates without any javascript code. Everything can be configured and rendered in PHP.

## Create new block class

Blocks need to extend `_BlockType` abstract class which comes with the interface `_IBlockType` that forces you to add some required functions. The minimal setup looks like this:

```php
// MyBlock.php
namespace MyNamespace;

use Palasthotel\WordPress\BlockX\Blocks\_BlockType;
use Palasthotel\WordPress\BlockX\Model\BlockId;
use Palasthotel\WordPress\BlockX\Model\ContentStructure;

class MyBlock extends _BlockType{

    public function id(): BlockId{
        // have a look at the Block Name character restrictions
        // https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#block-name
      	// the block id corresponds to the namespace and block-name parts of the first argument of the registerBlockType function
        return BlockId::build("my-namespace","my-block");
    }
    
	public function category(): string{
        // you can use the default categories
        // https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#category
        // OR
        // you can add custom categories
        // https://developer.wordpress.org/block-editor/developers/filters/block-filters/#managing-block-categories
	    	return "common";
    }
  
		public function title(): string{
	    	return "My Block";
    }
    
		public function contentStructure(): ContentStructure{
      	// the ContentStructure instance will define the inputs of our block
	  		return new ContentStructure([
         		// use Palasthotel\WordPress\BlockX\Widgets\* classes here
      	]);
    }

}
```

There are some more optional functions that can be overwritten:

```php
// MyBlock.php
...
class MyBlock extends _BlockType{
    ...
    public function registerBlockTypeArgs(): array{
      	$args = parent::registerBlockTypeArgs();
      	// all other arguments for the second argument of registerBlockType call can be injected via this $args object
      	// https://developer.wordpress.org/block-editor/developers/block-api/block-registration/
      	
      	$args["icon"] = "wordpress"; // https://developer.wordpress.org/resource/dashicons
        $args["description"] = "This is my custom block.";
      	$args["supports"] = [
          	"align" => true,
            "multiple" => false,
        ];
        ...
        
	      return $args;
    }
  	
  	public function prepare( stdClass $content ): stdClass {
      $content = parent::prepare($content);
      // extend $content with some more data that is important for rendering
      if($this->isEditor()){
        // extend $content with data that is important for editor preview rendering only
      } else {
        // extend $content with data that is important for frontend rendering only
      }
      return $content;
    }
}
```


## Add a block

Use the action `blockx_collect` to add your custom block classes:

```php
add_action('blockx_collect', function(Gutenberg $gutenberg){
  $gutenberg->addBlockType(new MyBlock());
});
```

Your brand new block will now be available in Gutenberg.

## Templates

Every Block needs two templates to render pretty content in the editor and in frontend. Naming conventions are `blockx__%namespace%--%block-name%.php` and `blockx__%namespace%--%block-name%__editor.php`. So for our block example this would be `blockx__my-namespace--my-block.php` and `blockx__my-namespace--my-block__editor.php`.

Tempaltes can be overwritten in theme path `your-theme/plugin-parts/*` or any first level subfolder like `your-theme/plugins-parts/my-blockx/*`. You can also add new template paths that will be scanned on the templates search. To add a plugin template folder simply use the filter `blockx_add_templates_paths` like so:

```php
add_filter('blockx_add_templates_paths', function($paths){
  $paths[] = "/my/absolute/path/to/my-plugin/templates/";
  return $paths;
})
```

## Widgets

In the namespace `Palasthotel\WordPress\BlockX\Widgets` there are some classes that should be used to build the array for the ContentStructure classes constructor call.

### Text

Simple text input.

```php
\Palasthotel\WordPress\BlockX\Widgets\Text::build(string $key, string $label, string $defaultValue = "");
```

### Number

Simple integer input.

```php
\Palasthotel\WordPress\BlockX\Widgets\Number::build(string $key, string $label, int $defaultValue = 0);
```

### Toggle

Simple boolean input.

```php
\Palasthotel\WordPress\BlockX\Widgets\Toggle::build(string $key, string $label, boolean $defaultValue = false);
```

You can additionally provide some help text.

```php
\Palasthotel\WordPress\BlockX\Widgets\Toggle::build(string $key, string $label, boolean $defaultValue = false)
  	->help("Helping description text.");
```

The label as well as the help can also be configured as `\Palasthotel\WordPress\BlockX\Model\StateLabel` instances.

```php
\Palasthotel\WordPress\BlockX\Widgets\Toggle::build(
		string $key, 
		StateLabel::build("This is on", "This is off"), 
		boolean $defaultValue = false
)->help(StateLabel::build("This happens when it's on", "This happens when it's off."));
```

### Select

Choose from a list of options.

```php
\Palasthotel\WordPress\BlockX\Widgets\Select::build(
	string $key, 
	string $label,
	[
		\Palasthotel\WordPress\BlockX\Model\Option::build($value, $label),
		...
	],
	string|null $defaultValue = null
);
```

If `$defaultValue` is `null` the first Option will be selected when instanciating a new block of this type.

### TaxonomyTerm

Choose a term of a taxonomy from a select field.

```php
\Palasthotel\WordPress\BlockX\Widgets\TaxonomyTerm::build(string $key, string $label, WP_Taxonomy|string $taxonomy, int|null $defaultValue);
```

**Important:** 

- When using custom taxonomies they need be configured with `show_in_rest => true`.
- `$defaultValue` needs to be a termId of the given taxonomy. 

### TaxQuery

For much more complex taxonomy conditions this widget provides a way to build tax_query arguments.

```php
\Palasthotel\WordPress\BlockX\Widgets\TaxQuery::build(
	string $key,
	string $label,
	WP_Taxonomy[]|string[] $taxonomies,
	array $defaultValue = []
);
```

## Usage

After building the skeleton of the block data will be collected and used like the following example:

```php
// MyBlock.php
use \Palasthotel\WordPress\BlockX\Model\ContentStructure;
use \Palasthotel\WordPress\BlockX\Model\Option;
use \Palasthotel\WordPress\BlockX\Model\StateLabel;
use \Palasthotel\WordPress\BlockX\Widgets\Text;
use \Palasthotel\WordPress\BlockX\Widgets\Number;
use \Palasthotel\WordPress\BlockX\Widgets\TaxQuery;
use \Palasthotel\WordPress\BlockX\Widgets\Toggle;

class MyBlock extends _BlockType{
	...
	
	// build the inputs
	public function contentStructure(): ContentStructure{
		return new ContentStructure([
			Text::build( "headline", "Headline" ),
			Number::build( "number_of_posts", "Number of posts", 5 ),
			Number::build( "offset", "Offset", 0 ),
			TaxQuery::build( "tquery", "Taxonomies", ["category", "post_tag"]),
			Toggle::build("show_autor", "Show author", false)->help(
				StateLabel::build(
					"Author name will be visible.",
					"No author name be visible."
				)
			)
		]);
	}
	
	// prepare the data to use it in templates
	public function prepare(stdClass $content): stdClass{
		$content = parent::prepare($content);
		
		$tax_query = [];
		// build wp tax_query with data provided by $content->tquery
		
		$content->wp_query_args = [
			"posts_per_page" => $content->number_of_posts,
			"offset" => $content->offset,
			"tax_query" => $tax_query,
			"post_type" => "my-custom-post-type",
		]
		
		return $content;
	}
}
```

Now the block will provide input widgets and parpare the `$content` data that will be delivered to the templates.

```php
// blockx__my-namespace--my-block__editor.php
/**
 * @var MyBlock $this 
 * @var stdClass $content
 */
 echo "<h3>$content->headline</h3>";
 echo "<div>";
 echo "<strong>Number of posts:</strong> $content->number_of_posts";
 echo "<br/>";
 echo "<strong>Offset:</strong> $content->offset";
... // some more data info
 echo "</div>";
	?>
</div>
```

It is possible to render WP_Query data in the editor template. But beware of peformance issues.

 ```php
 // blockx__my-namespace--my-block.php
 /**
 * @var MyBlock $this 
 * @var stdClass $content
 */
$query = new WP_Query($content->wp_query_args);
echo "<ul class='teaser-list'>";
while($query->have_posts()){
	$query->the_post();
	echo "<li class='teaser-item'>".get_the_title()."</li>";
}
echo "</ul>";
wp_reset_postdata();
 ```

 ## Future

- More Widgets
  - Media
  - custom autocomplete
- JavaScript rendering for editor template instead of ServerSideRendering
- Edit content in place and with markup