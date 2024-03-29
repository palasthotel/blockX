# BlockX

This is a npm package as well as a WordPress plugin for easier Gutenberg Block development. You can add configuratable boxes and templates without any javascript code. Everything can be configured and rendered in PHP. But you can also use `@palasthotel/blockx` package to add react editor views for your blockx blocks or to provide custom editor widgets.

## Filters

Some data filters to change blockx block behavoirs from outside.

### Block attributes

Gutenberg block attributes can be changed before blockx prepares the `$attributes['content']` values.

```php
add_filter(
    Palasthotel\WordPress\BlockX\Plugin::FILTER_BLOCK_ATTRIBUTES, 
    function($attributes, $block, $originalAttributes){
        /**
         * @var array $attributes
         * @var \Palasthotel\WordPress\BlockX\Blocks\_BlockType $block
         * @var array $originalAttributes
         */
      return $attributes;
    }, 
    10, 
    3
);
```

### Prepare contents

BlockX contents object can be changed after it was processed by the blockx classes prepare method and right before it will be provided to the template.

```php
add_filter(
    Palasthotel\WordPress\BlockX\Plugin::FILTER_PREPARE_CONTENT, 
    function($content, $block, $originalContent){
        /**
         * @var stdClass $content
         * @var \Palasthotel\WordPress\BlockX\Blocks\_BlockType $block
         * @var stdClass $originalAttributes
         */
      return $content;
    }, 
    10, 
    3
);
```

### Change block asset generation directory

With the introduction of containers as layout elements blockx needs to generate block.json files and css style files for those elements. Those files will be written to a blockx directory in the wp-content folder.

```php
add_action(
    Palasthotel\WordPress\BlockX\Plugin::ACTION_ASSET_GENERATION_PATHS,
    function($paths){
        // Change file generation to uploads/blockx/ directory.
        // You always have to change system and url property!		
        $paths->system = wp_upload_dir()["basedir"]."/blockx/";
		$paths->url    = wp_upload_dir()["baseurl"]."/blockx/";
    }
)
```

## Use containers

Containers are special blocks. You can use containers for custom columned rows. Blockx comes with containers for 1d1, 1d2 + 1d2, 1d3 + 2d3 and 2d3 + 1d3 columns. If you want to use some of these core containers, activate them in the blockx settings.

### Create new container class

Containers need to extend `_ContainerType` abstract class which comes with the interface `_IContainerType` that forces you t add some required functions. The minimal setup looks like this:

```php
namespace MyNamespace;

use Palasthotel\WordPress\BlockX\Containers\_ContainerType;

class MyContainer extends _ContainerType {
    public function id(): BlockId{
        // have a look at the Block Name character restrictions
        // https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#block-name
      	// the block id corresponds to the namespace and block-name parts of the first argument of the registerBlockType function
        return BlockId::build("my-namespace","my-container");
    }
    
    public function title(): string{
	    return "My Container";
    }
    
    public function columns(): array {
		return [1,1,1];
	}
}
```

Columns will be calculated with the denominator as the sum of all column values and the discriminators as the column values. This example would result in a 1d3 + 1d3 + 1d3 container with three slots. Blockx will automagically build css style files and a block.json.

You can prevent the autogeneration of styles if you provide your own styles.

```php
namespace MyNamespace;

use Palasthotel\WordPress\BlockX\Containers\_ContainerType;use Palasthotel\WordPress\BlockX\Model\Styles;

class MyContainer extends _ContainerType {
   ...
   public function __construct() {
        // you can provide a custom breakpoint when columns should be used. Default is 0 which means always use columns.
        parent::__construct(768);
   }
   
   public function columns() : array{
      // this container will have two slots with 25% and 75% width 
      return [1,3];
    }
   
   public function style() : Styles{
     // Register a custom frontend css file and use its handle to provide frontend styles for this container
     // these styles will also be used in the editor.
     wp_register_style("my-frontend-and-editor-styles-handle", ...);
     return parent::styles()->add("my-frontend-and-editor-styles-handle", false);
   }
   
   public function editorStyle() : Styles{
     // You can do the same exact thing with the editorStyles file which is only used in the editor
     wp_register_style("my-editor-styles-handle", ...);
     return parent::editorStyles()->add("my-editor-styles-handle");
   }
}
```

### Add a container

Use the action `blockx_collect` to add your custom container classes:

```php
add_action('blockx_collect', function(Gutenberg $gutenberg){
  $gutenberg->addContainerType(new MyContainer());
});
```

Your brand new container will now be available in Gutenberg.

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

## Widgets

In the namespace `Palasthotel\WordPress\BlockX\Widgets` there are some classes that should be used to build the array for the ContentStructure classes constructor call.

### Text

Simple text input.

```php
\Palasthotel\WordPress\BlockX\Widgets\Text::build(string $key, string $label, string $defaultValue = "")
->rows(1)
->maxChars(30)
->help("Description text");
```

With `rows` larger than 1 this widget is equal to Textarea.

To restrict the text to a maximal length you can use `maxChars`.

The `help` function lets you provide a description.

### Textarea

Is technically the same as Text.

```php
\Palasthotel\WordPress\BlockX\Widgets\Textarea::build(string $key, string $label, string $defaultValue = "")
->rows(10)
->maxChars(500)
->help("Description text");
```

With `rows` equals 1 this widget is equal to Text.

To restrict the text to a maximal length you can use `maxChars`.

The `help` function lets you provide a description.

### Number

Simple integer input.

```php
\Palasthotel\WordPress\BlockX\Widgets\Number::build(string $key, string $label, int $defaultValue = 0)
->min(10)
->max(500)
->help("Description text");
```

### Readonly

Readonly field.

```php
\Palasthotel\WordPress\BlockX\Widgets\Read_Only::build(string $key, string $label, string $value = "")
->help("Some helping text");
```

### Info

Simple text info for the user. No input.

```php
\Palasthotel\WordPress\BlockX\Widgets\Info::build(string $text);
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
)->multiple(true);
```

If `$defaultValue` is `null` the first Option will be selected when instanciating a new block of this type.

If you use `multiple(true)` please provide an array of strings as default value. [At the moment there is a known visual bug with multiple select control](https://github.com/WordPress/gutenberg/issues/27166).

### Media

*Since plugin Version: `1.0.6`*

Use media contents.

```php
\Palasthotel\WordPress\BlockX\Widgets\Media::build(
	string $key, 
	string $label,
	string $defaultValue = ""
)
->multiple(true)
->setMediaTypes(["image", "audio", "application/pdf"])
->setMediaUploadTitle("My Title");
```
Depending on `multiple` set to true or false the content value of the media widget field will be a single ID or an array of IDs. Default value is `false`.

If `setMediaTypes` expects a list of [media_type or mime_type strings](https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/media-placeholder#allowedtypes). 

You can also change the title of the media overlay with `setMediaUploadTitle`.


### Post

Select one specific post content.

```php
\Palasthotel\WordPress\BlockX\Widgets\Post::build(string $key, string $label, $defaultValue)
->postTypes(["post", "page"]) // default is ["post"]
->postStatus(["publish", "future"]); // default is ["publish"]
```

### User

Select one specific user.

```php
\Palasthotel\WordPress\BlockX\Widgets\User::build(string $key, string $label, $defaultValue)
->roles(["administrator", "editor"]) // default is [] which gives you all roles
```

### TaxonomyTerm

Choose a term of a taxonomy from a select field.

```php
\Palasthotel\WordPress\BlockX\Widgets\TaxonomyTerm::build(
    string $key, 
    string $label, 
    WP_Taxonomy|string $taxonomy, 
    int|null $defaultValue
)
->multiple(true);
```

Depending on `multiple` set to true or false the content value of the widget field will be a single ID or an array of IDs. Default value is `false`.

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

### AutoSuggest

Help user inputs with auto suggestions.

```php
\Palasthotel\WordPress\BlockX\Widgets\AutoSuggest::build(
    "post_url",
    "Post url"
)
->useProvider(new \Palasthotel\WordPress\BlockX\Utils\PostUrlSuggestionProvider());
```

**Important:**

It is required to use a class that implements ISuggestionProvider interface. AutoSuggest widget can only handle SimpleSuggestion model responses.

### Url

The Url widget works pretty much the same like the AutoSuggest widget.

```php
\Palasthotel\WordPress\BlockX\Widgets\Url::build(
    "page_url",
    "Page Url"
)
->useProvider(new \Palasthotel\WordPress\BlockX\Utils\PageUrlSuggestionProvider());
```

If you do not provide a custom ISuggestionProvider `\Palasthotel\WordPress\BlockX\Utils\PostUrlSuggestionProvider` will be used by default.


### AutoComplete

The AutoComplete widget works pretty much the same like the AutoSuggest widget 
but the user has to choose a suggestion which will than be locked.

```php
\Palasthotel\WordPress\BlockX\Widgets\AutoComplete::build(
    "post_url",
    "Post url"
)
->useProvider(new \Palasthotel\WordPress\BlockX\Utils\PostUrlSuggestionProvider());
```

### Panel

Gutenberg uses collapsible panels to group configuration sections. It's possible to use this ui pattern with the Panel Widget type.

```php
\Palasthotel\WordPress\BlockX\Widgets\Panel::build(
  string $label, 
  $contentStructure: ContentStructure
)->opened(bool $isOpened)
```

**Important:**

- Panels can only be used as first level ContentStructure Items. It's not possible to use a Panel in a Panel or in other Widgets that open a new level of content structure.


### ListOf

ListOf wraps a list of other widgets and lets you build a list of these widgets instances.

```php
\Palasthotel\WordPress\BlockX\Widgets\ListOf::build(
  string $key,
  string $label, 
  $contentStructure: ContentStructure
)
->min(2)
->max(4)
->exact(3);
```

- `min` value larger than 0 will automagically add that number of items to the list when the block is added to the editor. It will also disable the delete buttons if the number of elements would fall below the specified value.
- `max` value larger than 0 will disable all add buttons if the number of elements matches the specified value.
- `exact` is a shorthand for min and max with the same value.

### Custom Widget

If you need a custom widget you can simply provide one in two steps:

First create a custom Widget class that extends `_Widget` abstract class.

```php
class MyWidget extends \Palasthotel\WordPress\BlockX\Widgets\_Widget {

    const TYPE = "my-widget";

    public static function build( string $key, string $label, string $defaultValue = "" ) {
        return new static( $key, $label, static::TYPE, $defaultValue );
    }
}
```

Then add some React JavaScript.

```javascript
import {registerEditorWidget} from "@palasthotel/blockx";
const MyWidget = ({definition, value, onChange}) => {
    return (
        <label>{definition.label}<br/>
            <input 
                value={value} 
                onChange={e => onChange(e.target.value)}
            />
        </label>
    )
}

registerEditorWidget("my-widget-type", MyWidget);
```

Now you can use this widget in your blockx blocks content structure.

**Important:**

- This is JSX/TSX syntax so you need to use a javascript bundler to transpile it to browser readable javascript code
- Best practice is to use the `@wordpress/scripts` npm package to transpile React components


## Templates

Every Block needs two templates to render pretty content in the editor and in frontend. Naming conventions are `blockx__%namespace%--%block-name%.php` and `blockx__%namespace%--%block-name%__editor.php`. So for our block example this would be `blockx__my-namespace--my-block.php` and `blockx__my-namespace--my-block__editor.php`.

Tempaltes can be overwritten in theme path `your-theme/plugin-parts/*` or any first level subfolder like `your-theme/plugins-parts/my-blockx/*`. You can also add new template paths that will be scanned on the templates search. To add a plugin template folder simply use the filter `blockx_add_templates_paths` like so:

```php
add_filter('blockx_add_templates_paths', function($paths){
  $paths[] = "/my/absolute/path/to/my-plugin/templates/";
  return $paths;
})
```

###  React Editor Template

There is another way to provide content rendering of BlockX in Gutenberg Editor. This is a little more tricky than the php editor template variant but it might help preventing server performance issues and can help build better and faster user experiance.

Overwrite the `editorScript` function which should register and return the scripts file handle.

```php
// MyBlock.php
...
class MyBlock extends _BlockType{
  	...
    public function editorScript(): string {
      wp_register_script(
        "my-blockx-components-script", 
        plugin_dir_url(__FILE__)."/my-blockx-components.js",
        ["react"],
        "version",
        true
      );
      return "my-blockx-components-script";
    }
  	...
}
```

The `my-blockx-components.js` file will be enqueue as a dependency of `blockx.js`. Add it to the footer and with react as a dependency.

```jsx
// my-blockx-components.js
import {blockId, registerEditorView} from "@palasthotel/blockx";
registerEditorView(
    blockId("my-namespace","my-block"),
    MyBlockEditorCompontent
);
```

If there is a registered component for the block id it will be used in Gutenberg content view instead of server side rendering the editor php templates.

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
	public function prepare(\stdClass $content): \stdClass{
		$content = parent::prepare($content);
		
		$tax_query = [];
		// build wp tax_query with data provided by $content->tquery
		
		$content->wp_query_args = [
			"posts_per_page" => $content->number_of_posts,
			"offset" => $content->offset,
			"tax_query" => $tax_query,
			"post_type" => "my-custom-post-type",
		];
		
		return $content;
	}
}
```

Now the block will provide input widgets and prepare the `$content` data that will be delivered to the templates.

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
```

It is possible to render WP_Query data in the editor template. But beware of performance issues.

---

Alternatively use React Component editor rendering.

 ```jsx
// my-blockx-components.js
import {blockId, registerEditorView} from "@palasthotel/blockx";

const MyBlockEditorComponent = ({headline, number_of_posts, offset})=>{
  return <>
  	<hr>{headline}</hr>
  	<div>
    	<strong>Number of posts:</strong> {number_of_posts}<br/>
    	<strong>Offset:</strong> {offset}
  	</div>
  </>
}

registerEditorView(
    blockId("my-namespace","my-block"),
    MyBlockEditorCompontent
);
 ```

It is possible to use wp.data and the REST API to query for posts and display an even better preview. This has better performance than the php server side rendering version but can nevertheless also lead to server performance issues.

---


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

## Use Composed Blocks / Inner Blocks
You can use Gutenbergs [innerBlocks](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/) with a composed block in BlockX.
This allows you to generate a new block that uses existing blocks. 

### Create composed block
Composed blocks are very similar constructed to containers. They need to extend _ComposedBlockType abstract class which comes with the interface _IComposedBlockType that forces you to add some required functions. The minimal setup looks like this:

```php
namespace MyNamespace;

use Palasthotel\WordPress\BlockX\ComposedBlocks\_ComposedBlockType;

class MyComposedBlock extends _ComposedBlockType {
    public function id(): BlockId {
        // have a look at the Block Name character restrictions
        // https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#block-name
      	// the block id corresponds to the namespace and block-name parts of the first argument of the registerBlockType function
        return BlockId::build("my-namespace","my-composed-block");
    }
    
    public function title(): string {
      return "My Composed Block";
    }
    
    public function allowedBlocks(): array {
	    return ['core/headline', 'core/paragraph'];
    }
   
}
```

Supported [innerBlocks-props](https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/inner-blocks/README.md) via class-methods: 

- allowedBlocks | allowedBlocks()
- orientation | orientation()
- template | template()
- templateLock | templateLock()
- category | category()

Styles (frontend and editor) and scripts can be enqueued as usual.

 ## Future

- More Widgets
- Edit content in place and with markup
