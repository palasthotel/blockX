import {registerBlockType} from "@wordpress/blocks";

import slotMetaData from '../../../public/assets/slot/block.json';
import slotSettings from './register-slot.js';
import buildContainer from './register-container.js';

registerBlockType(slotMetaData, slotSettings);

for( const container of BlockX.containers){
    const {meta, settings} = buildContainer(container);
    registerBlockType(meta,settings);
}