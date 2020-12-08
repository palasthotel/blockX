const { STORE_NAME } = require("../data/store")

setInterval(()=>{
    const store = wp.data.select(STORE_NAME);
    if(store.isRequesting()){
        return;
    }
    if(store.getQueue().length < 1){
        return;
    }
    wp.data.dispatch(STORE_NAME).fetchSSR();
}, 3000)