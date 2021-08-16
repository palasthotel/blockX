import {useUser} from "../../hooks/use-users";
import './UserWidget.css'
import LockedTextControl from "../LockedTextControl";
import AutoCompleteTextControl from "../AutoCompleteTextControl";
import {useUsersCompletionFactory} from "../../hooks/use-completion";

const UserSearchResult = ({id, name, onClick})=>{
    return <div 
        className="blockx-user"
        onClick={onClick}
        >
        {name}<br />
        <i className="description">id: {id}</i>
    </div>
}

const SearchUser = ({label, roles, use_context, onFound})=>{

    const useCompletion = useUsersCompletionFactory(roles, use_context);

    return <AutoCompleteTextControl
        label={label}
        useCompletion={useCompletion}
        renderItem={(user) => {
            return <UserSearchResult
                key={user.id}
                {...user}
                onClick={()=>onFound(user.id)}
            />
        }}
        messageNothingFound={"No users found."}
    />;
}

const LockedUser = ({label, user_id, onUnlock})=>{

    const {user} = useUser(user_id)

    const {
        name = user_id
    } = user;

    return <LockedTextControl
        label={label}
        value={name}
        onUnlock={onUnlock}
    />
}

const UserWidget = ({definition, value, onChange, instance})=> {

    if(!value){
        return <SearchUser
            label={definition.label}
            roles={definition.roles}
            use_context={definition.use_context}
            instance={instance}
            onFound={onChange}
        />
    }
    
    return <LockedUser
        label={definition.label}
        user_id={value}
        onUnlock={()=>onChange("")}
    />
}

export default UserWidget;