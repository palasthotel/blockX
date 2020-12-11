
const { select, dispatch } = require("@wordpress/data");
const { STORE_NAME } = require("../data/store")

setInterval(()=>{
    const store = select(STORE_NAME);
    if(store.isRequesting()){
        return;
    }
    if(store.getQueue().length < 1){
        return;
    }
    dispatch(STORE_NAME).fetchSSR(
        select('core/editor').getCurrentPostId()
    );
}, 300)