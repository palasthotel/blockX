<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4bf5107ee0c3455b4fd4e8ddf3d339d4
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Palasthotel\\WordPress\\BlockX\\' => 29,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Palasthotel\\WordPress\\BlockX\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static $classMap = array (
        'Palasthotel\\WordPress\\BlockX\\Assets' => __DIR__ . '/../..' . '/classes/Assets.php',
        'Palasthotel\\WordPress\\BlockX\\Blocks\\Posts' => __DIR__ . '/../..' . '/classes/Blocks/Posts.php',
        'Palasthotel\\WordPress\\BlockX\\Blocks\\_BlockType' => __DIR__ . '/../..' . '/classes/Blocks/_BlockType.php',
        'Palasthotel\\WordPress\\BlockX\\Blocks\\_IBlockType' => __DIR__ . '/../..' . '/classes/Blocks/_IBlockType.php',
        'Palasthotel\\WordPress\\BlockX\\Gutenberg' => __DIR__ . '/../..' . '/classes/Gutenberg.php',
        'Palasthotel\\WordPress\\BlockX\\Model\\ContentStructure' => __DIR__ . '/../..' . '/classes/Model/ContentStructure.php',
        'Palasthotel\\WordPress\\BlockX\\Model\\Option' => __DIR__ . '/../..' . '/classes/Model/Option.php',
        'Palasthotel\\WordPress\\BlockX\\Templates' => __DIR__ . '/../..' . '/classes/Templates.php',
        'Palasthotel\\WordPress\\BlockX\\Widgets\\Checkbox' => __DIR__ . '/../..' . '/classes/Widgets/Checkbox.php',
        'Palasthotel\\WordPress\\BlockX\\Widgets\\ListOf' => __DIR__ . '/../..' . '/classes/Widgets/ListOf.php',
        'Palasthotel\\WordPress\\BlockX\\Widgets\\Number' => __DIR__ . '/../..' . '/classes/Widgets/Number.php',
        'Palasthotel\\WordPress\\BlockX\\Widgets\\Panel' => __DIR__ . '/../..' . '/classes/Widgets/Panel.php',
        'Palasthotel\\WordPress\\BlockX\\Widgets\\Select' => __DIR__ . '/../..' . '/classes/Widgets/Select.php',
        'Palasthotel\\WordPress\\BlockX\\Widgets\\TaxQuery' => __DIR__ . '/../..' . '/classes/Widgets/TaxQuery.php',
        'Palasthotel\\WordPress\\BlockX\\Widgets\\Text' => __DIR__ . '/../..' . '/classes/Widgets/Text.php',
        'Palasthotel\\WordPress\\BlockX\\Widgets\\_IWidget' => __DIR__ . '/../..' . '/classes/Widgets/_IWidget.php',
        'Palasthotel\\WordPress\\BlockX\\Widgets\\_Widget' => __DIR__ . '/../..' . '/classes/Widgets/_Widget.php',
        'Palasthotel\\WordPress\\BlockX\\_Component' => __DIR__ . '/../..' . '/classes/_Component.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4bf5107ee0c3455b4fd4e8ddf3d339d4::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4bf5107ee0c3455b4fd4e8ddf3d339d4::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit4bf5107ee0c3455b4fd4e8ddf3d339d4::$classMap;

        }, null, ClassLoader::class);
    }
}
