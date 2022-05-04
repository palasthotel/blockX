import {registerBlockType} from "@wordpress/blocks";

import buildComposedBlocks from './register-composedBlocks.js';

//registerBlockType(slotMetaData, slotSettings);

for (const composedBlock of BlockX.composedBlocks) {
    const {meta, settings} = buildComposedBlocks(composedBlock);
    registerBlockType(meta,settings);
}