import {usePost} from "../../hooks/use-posts";
import './PostWidget.css'
import LockedTextControl from "../LockedTextControl";
import {usePostsCompletionFactory} from "../../hooks/use-completion";
import AutoCompleteTextControl from "../AutoCompleteTextControl";

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

    const useCompletion = usePostsCompletionFactory(post_types, post_status, use_context);

    return <AutoCompleteTextControl
        label={label}
        useCompletion={useCompletion}
        renderItem={(post) => {
            return <PostSearchResult
                key={post.ID}
                {...post}
                onClick={()=>onFound(post.ID)}
            />
        }}
    />
}

const LockedPost = ({label,post_id, onUnlock})=>{

    const {post} = usePost(post_id)

    const {
        post_title = post_id
    } = post;

    return <LockedTextControl
        label={label}
        value={post_title}
        onUnlock={onUnlock}
    />
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