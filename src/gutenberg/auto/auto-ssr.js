import {select, dispatch} from "@wordpress/data";
import {STORE_NAME} from "../data/store";

setInterval(() => {
    const store = select(STORE_NAME);
    if (store.isRequesting()) {
        return;
    }
    if (store.getQueue().length < 1) {
        return;
    }
    dispatch(STORE_NAME).fetchSSR(
        select('core/editor').getCurrentPostId()
    );
}, 300)