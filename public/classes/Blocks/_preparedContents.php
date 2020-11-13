<?php

namespace Palasthotel\WordPress\BlockX\Blocks;

use stdClass;
use WP_Post;
use WP_User;


/**
 * Class PostEmbedContent
 * @property WP_Post|null $post
 */
class PostEmbedContent extends stdClass {}

/**
 * Class AuthorsContent
 * @property string[] $author_ids
 * @property WP_User[] $authors
 */
class AuthorsContent extends stdClass {}