<?php

namespace Palasthotel\WordPress\BlockX\Blocks;

use stdClass;
use WP_Post;
use WP_User;

/**
 * Class PostEmbedContent
 * @property WP_Post|null $post
 */
class PostEmbedContent extends stdClass {
}

/**
 * Class PostsContent
 * @property int $number_of_posts
 * @property int $offset
 * @property string $post_type
 * @property array $tax_query
 * @property array $args
 */
class PostsContent extends stdClass {
}

/**
 * @property int $id
 * @property string $displayname
 * @property string $nicename
 * @property string $url
 */
class AuthorContent extends stdClass{

}

/**
 * Class AuthorsContent
 * @property boolean $include_embedded_posts
 * @property string[] $author_ids
 * @property AuthorContent[] $authors
 */
class AuthorsContent extends stdClass {
}