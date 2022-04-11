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
        `blockx__composed-block--c${type}`,
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
    }

    console.log("composedBlock - build");
    console.log(composedBlock);
    
    const type = composedBlockMeta.name;

    return {
        meta: composedBlockMeta,
        settings: {
            icon: "layout",
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
                    //templateLock: 'insert',
                    //orientation: 'horizontal',
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