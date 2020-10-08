import { registerBlockType } from '@wordpress/blocks'
import PostsQueryBuilder from "../components/posts-query-builder";

export const blockName = 'blockx/posts';

registerBlockType( blockName, {
    title: 'Posts',
    description: 'Query posts',
    category: 'embed',
    icon: 'list-view',
    supports: {
        align: true,
        customClassName: true,
    },
    edit: (props) => {
        const {isSelected, className,  setAttributes, attributes} = props;
        return <div className={className}>
            <PostsQueryBuilder
            />
        </div>
    },
})