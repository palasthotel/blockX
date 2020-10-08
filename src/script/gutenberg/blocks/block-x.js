import { registerBlockType } from '@wordpress/blocks'
import PostsQueryBuilder from "../components/posts-query-builder";

for( const {id, title, category, registerBlockTypeArgs, contentStructure} of BlockX.blocks){
    registerBlockType( id, {
        ...registerBlockTypeArgs,
        title,
        category,
        edit: (props) => {
            const {isSelected, className,  setAttributes, attributes} = props;


            return <div className={className}>
                {contentStructure.map(item=>{
                    return <p>Type <b>{item.type}</b> not implemented</p>
                })}
            </div>
        },
    });

}