import {BaseControl, Icon, Popover, TextControl} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { useEscapeKey } from "../../hooks/use-utils.js";
import { useFetchPosts, usePost } from "../../hooks/use-posts";
import './post-widget.css'

const PostSearchResult = ({ID, post_title, onClick})=>{
    return <div 
        className="ptm-post"
        onClick={onClick}
        >
        {post_title}
    </div>
}

const SearchPost = ({label, post_types, post_status, onFound})=>{

    const [state, setState] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    const {posts, isLoading} = useFetchPosts(state, post_types, post_status)

    useEscapeKey(()=>{
        setIsVisible(false)
    }, [isVisible], isVisible)

    return <BaseControl>
        <TextControl
            label={label}
            value={state}
            onChange={(value)=>{
                setIsVisible(value.length > 0)
                setState(value);
            }}
        />
        
        { isVisible && posts.length > 0 ? (
            <Popover 
                focusOnMount={false}
                position="bottom center"
            >
                {posts.map(post=> <PostSearchResult 
                        key={post.ID}
                        {...post} 
                        onClick={()=>onFound(post.ID)} 
                    />
                )}
            </Popover>
        ) : null}
    </BaseControl>
}

const LockedPost = ({label,post_id, onUnlock})=>{

    const {post} = usePost(post_id)

    const {
        post_title = post_id
    } = post;

    console.log("LockedPost", post_title)

    return <BaseControl
        className="ptm--locked-post"
    >
        <TextControl
            label={label}
            value={post_title}
            readOnly={true}
        />
        <span className="ptm--locked-post__icon" onClick={onUnlock} >
            <Icon icon="no" />
        </span>
    </BaseControl>
}

const PostWidget = ({definition, value, onChange})=> {

    if(!value){
        return <SearchPost
            label={definition.label}
            post_types={definition.post_types} 
            post_status={definition.post_status}
            onFound={onChange}
        />
    }
    
    return <LockedPost
        label={definition.label}
        post_id={value}
        onUnlock={()=>onChange("")}
    />
}

export default PostWidget;