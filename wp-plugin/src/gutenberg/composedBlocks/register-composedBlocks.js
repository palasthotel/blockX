import {usePreviewMode} from "../hooks/use-preview-mode";
import {InnerBlocks, useBlockProps} from "@wordpress/block-editor";
import {
    useInnerBlocksProps as __stableUseInnerBlocksProps,
    __experimentalUseInnerBlocksProps
} from "@wordpress/block-editor";
import meta from '../../../public/assets/composedBlock/block.json';

const useInnerBlocksProps = __stableUseInnerBlocksProps
    ? __stableUseInnerBlocksProps
    : __experimentalUseInnerBlocksProps;

function getComposedBlocksClasses(type, previewMode){
    const classes = [
        "blockx__composed-block",
        `blockx__composed-block--${type.replace("/", "_")}`,
    ];
    if(previewMode){
        classes.push(`preview-mode-${previewMode}`);
    }
    return classes;
}

const build = (composedBlock) => {

    const composedBlockMeta = {
        ...meta,
        name: composedBlock.id,
        title: composedBlock.title,
        style: composedBlock.style,
        editorStyle: composedBlock.editorStyle,
        templates: composedBlock.templates,
        allowedBlocks: composedBlock.allowedBlocks,
        templateLock: composedBlock.templateLock,
        orientation: composedBlock.orientation,
    }
    

    if (composedBlock.category) composedBlockMeta.category = composedBlock.category;
    if (composedBlock.icon) composedBlockMeta.icon = composedBlock.icon;

    const type = composedBlockMeta.name;

    return {
        meta: composedBlockMeta,
        settings: {
            category: composedBlockMeta.category,
            icon: composedBlockMeta.icon,
            transforms: [],
            edit: (props) => {
                const previewMode = usePreviewMode();
                const classes = getComposedBlocksClasses(type, previewMode);
                const blockProps = useBlockProps({
                    className: classes.join(" ")
                });
                const innerBlocksProps = useInnerBlocksProps(blockProps, {
                    allowedBlocks: composedBlockMeta.allowedBlocks,
                    template: composedBlockMeta.templates,
                    templateLock: composedBlockMeta.templateLock,
                    orientation: composedBlockMeta.orientation,
                    renderAppender: InnerBlocks.ButtonBlockAppender
                });

                return (<div {...innerBlocksProps} />
                );
            },
            save: ({attributes}) => {
                const blockProps = useBlockProps.save();
                const classes = [
                    blockProps.className,
                    ...getComposedBlocksClasses(type),
                ];
                blockProps.className = classes.join(" ");
                return (
                    <div {...blockProps}>
                        <InnerBlocks.Content/>
                    </div>
                );
            },
        },
    };
};

export default build;