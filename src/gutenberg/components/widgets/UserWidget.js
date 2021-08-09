import {BaseControl, Icon, Popover, Spinner, TextControl} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { useEscapeKey } from "../../hooks/use-utils.js";
import { useFetchUsers, useUser } from "../../hooks/use-users";
import './UserWidget.css'

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

    const [state, setState] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    const {users, isLoading} = useFetchUsers(state, roles, use_context)

    useEscapeKey(()=>{
        setIsVisible(false)
    }, [isVisible], isVisible)

    return <BaseControl className="blockx--search-user">
        <div className="blockx--search-users__input-wrapper">
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
                className="blockx--search-user__spinner-wrapper"
            ><Spinner/></span>)}
        </div>
        
        { isVisible ? (
            <Popover 
                focusOnMount={false}
                position="bottom center"
            >
                <div className="blockx--search-user__popover">

                {users.length > 0 ?
                    users.map(user=> <UserSearchResult
                            key={user.id}
                            {...user}
                            onClick={()=>onFound(user.id)}
                        />
                    )
                    :
                    <p className="blockx--search-user__no-results">{isLoading ? "Searching..." : "No users found."}</p>
                }
                </div>
            </Popover>
        ) : null}
    </BaseControl>
}

const LockedUser = ({label,user_id, onUnlock})=>{

    const {user} = useUser(user_id)

    const {
        name = user_id
    } = user;

    return <BaseControl
        className="blockx--locked-user"
    >
        <TextControl
            label={label}
            value={name}
            readOnly={true}
        />
        <span className="blockx--locked-user__icon" onClick={onUnlock} >
            <Icon icon="no" />
        </span>
    </BaseControl>
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