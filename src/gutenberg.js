import apiFetch from '@wordpress/api-fetch';

apiFetch.use((options, next)=>{
    options.headers = {
        ...(options.headers || {}),
        ["Block-X-Editor"]: true,
    }
    return next(options);
});

import './gutenberg/containers/container-x.js'
import './gutenberg/blocks/block-x.js';
import './gutenberg/auto/auto-ssr.js';
import './gutenberg.scss';