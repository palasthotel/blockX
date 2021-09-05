import {usePreviewMode} from "../hooks/use-preview-mode";
import {InnerBlocks, useBlockProps} from "@wordpress/block-editor";
import {__experimentalUseInnerBlocksProps as useInnerBlocksProps} from "@wordpress/block-editor";
import meta from '../../../public/assets/container/block.json';

const ALLOWED_BLOCKS = ['blockx/slot'];

function getContainerClasses(type, previewMode){
    const classes = [
        "blockx__container",
        `blockx__container--c${type}`,
    ];
    if(previewMode){
        classes.push(`preview-mode-${previewMode}`);
    }
    return classes;
}

const build = (container) => {

    const containerMeta = {
        ...meta,
        name: container.id,
        title: container.title,
        style: container.style,
        editorStyle: container.editorStyle,
    }

    const template = container.columns.map(weight=>{
        return [
            "blockx/slot",
            { weight },
        ];
    });
    const denominator = container.columns.reduce((sum, value) => sum + value, 0);
    const type = container
        .columns
        .map(discriminator => `${discriminator}d${denominator}`)
        .join("-");

    return {
        meta: containerMeta,
        settings: {
            icon: "layout",
            transforms: [],
            edit: (props) => {
                const previewMode = usePreviewMode();
                const classes = getContainerClasses(type, previewMode);
                const blockProps = useBlockProps({
                    className: classes.join(" ")
                });
                const innerBlocksProps = useInnerBlocksProps(blockProps, {
                    allowedBlocks: ALLOWED_BLOCKS,
                    template,
                    orientation: 'horizontal',
                    renderAppender: false,
                });

                return (<div {...innerBlocksProps} />
                );
            },
            save: ({attributes}) => {
                const blockProps = useBlockProps.save();
                const classes = [
                    blockProps.className,
                    ...getContainerClasses(type),
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