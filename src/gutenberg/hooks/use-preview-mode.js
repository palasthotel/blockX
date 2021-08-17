import {useSelect} from "@wordpress/data";

export const usePreviewMode = ()=> useSelect(
    select=> select('core/edit-post').__experimentalGetPreviewDeviceType(),
    []
);