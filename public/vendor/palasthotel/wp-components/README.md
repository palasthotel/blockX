# WP Components

This composer library provides php class helpers for typical WordPress extensions.

- abstract Plugin class as plugin starting point
- Extend term with meta values

## Get started

Add the following to your composer.json

```json
{
  ...,
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/palasthotel/wp-components.git"
    }
  ],
  "require": {
    "palasthotel/wp-components": "0.0.1"
  },
  "autoload": {
    "psr-4": {
      ...
      "Palasthotel\\WordPress\\": "vendor/palasthotel/wp-components/src"
    }
  },
  ...
}
```

Then use `composer install` to install the dependencies. Use `composer install --no-cache` if you use dev version `"palasthotel/wp-components": "dev-master"`.

Include the generated `vendor/autoload.php` to use autoload.

## Plugin

Extend the abstract class Plugin.

```php
class MyPlugin extends \Palasthotel\WordPress\Plugin {
    public function onCreate(){
        // you must implement onCreate function
        // this is where you build your plugin components
    }
    
    public function onActivation(){
        // you can overwrite onActivation
    }
    
    public function onDeactivation(){
        // you can overwrite onDeactivation function
    }
}
MyPlugin::instance();
```
This Plugin class automatically holds some properties like `path`, `url` and `basename`.

## TermMetaFields

Use this config if you want to add some term meta fields.

```php
$config = \Palasthotel\WordPress\Taxonomy\TermMetaFieldsConfig::build();
$config->taxonomies(["category", "post_tag"]);
$config->add(function($taxonomy){
    // render fields on add term page
});
$config->edit(function($term){
    // render form on edit term page
});
$config->onSave(function($term_id){
    // save your field(s)
});
new \Palasthotel\WordPress\Taxonomy\TermMetaFields($config);
```

#### Checkbox field

Use this config if you want to provide a checkbox field.

```php
$config = \Palasthotel\WordPress\Taxonomy\TermMetaCheckboxFieldConfig::build();
$config->taxonomies(["category"]);
$config->label("Feature");
$config->description("What does it do?");
$config->isChecked(function($term){
     return get_term_meta( $term->term_id, "my_meta_key", true ) === "1";
});
$config->onSaveCheckbox(function($term_id, $isChecked){
    update_term_meta($term_id, "my_meta_key", "1");
});
new \Palasthotel\WordPress\Taxonomy\TermMetaFields($config);
```