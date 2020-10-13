
window.BlockXPreviews = {
    ...(window.BlockXPreviews || {}),
    ["blockx/rss"]: ({id, content})=>{

        const {
            headline = "",
        }  = content;
        return <p>{headline}</p>
    },
};