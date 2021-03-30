import {BaseControl, Icon, Popover, Spinner, TextControl} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { useEscapeKey } from "../../hooks/use-utils.js";
import { useFetchPosts, usePost } from "../../hooks/use-posts";
import './PostWidget.css'

const PostSearchResult = ({ID, post_title, onClick})=>{
    return <div 
        className="blockx-post"
        onClick={onClick}
        >
        {post_title}<br />
        <i className="description">ID: {ID}</i>
    </div>
}

const SearchPost = ({label, post_types, post_status, use_context, onFound})=>{

    const [state, setState] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    const {posts, isLoading} = useFetchPosts(state, post_types, post_status, use_context)

    useEscapeKey(()=>{
        setIsVisible(false)
    }, [isVisible], isVisible)

    return <BaseControl className="blockx--search-post">
        <div className="blockx--search-posts__input-wrapper">
            <TextControl
                label={label}
                value={state}
                onChange={(value)=>{
                    setIsVisible(true)
                    setState(value);
                }}
                onFocus={()=>setIsVisible(true)}
            />
            {isLoading && (<span 
                className="blockx--search-post__spinner-wrapper"
            ><Spinner/></span>)}
        </div>
        
        { isVisible ? (
            <Popover 
                focusOnMount={false}
                position="bottom center"
            >
                <div className="blockx--search-post__popover">


                {posts.length > 0 ? 
                    posts.map(post=> <PostSearchResult 
                            key={post.ID}
                            {...post} 
                            onClick={()=>onFound(post.ID)} 
                        />
                    )
                    :
                    <p className="blockx--search-post__no-results">{isLoading ? "Searching..." : "No posts found."}</p>
                }
                </div>
            </Popover>
        ) : null}
    </BaseControl>
}

const LockedPost = ({label,post_id, onUnlock})=>{

    const {post} = usePost(post_id)

    const {
        post_title = post_id
    } = post;

    return <BaseControl
        className="blockx--locked-post"
    >
        <TextControl
            label={label}
            value={post_title}
            readOnly={true}
        />
        <span className="blockx--locked-post__icon" onClick={onUnlock} >
            <Icon icon="no" />
        </span>
    </BaseControl>
}

const PostWidget = ({definition, value, onChange, instance})=> {

    if(!value){
        return <SearchPost
            label={definition.label}
            post_types={definition.post_types} 
            post_status={definition.post_status}
            use_context={definition.use_context}
            instance={instance}
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