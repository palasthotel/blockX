const { getBlockContext } = require("../utils/context")

const BlockContext = ({
    blockId, 
    contentStructure, 
    defaultValues, 
    content, 
    changeLocalState,
    localChanges,
    children
})=>{
    const Context = getBlockContext();
    return <Context.Provider value={{
        blockId,
        contentStructure,
        defaultValues,
        content,
        changeLocalState,
        localChanges,
        dirtyState:{
            ...content,
            ...localChanges,
        },
    }}>
        {children}
    </Context.Provider>
}

export default BlockContext;