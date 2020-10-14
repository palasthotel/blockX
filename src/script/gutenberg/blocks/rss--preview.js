
window.BlockXComponents = {
    ...(window.BlockXComponents || {}),
    ["blockx/rss"]: ({id, content})=>{

        const {
            headline = "",
        }  = content;
        return <p>{headline}</p>
    },
};