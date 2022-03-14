import {
    InnerBlocks,
    useBlockProps,
    useInnerBlocksProps as __stableUseInnerBlocksProps,
    __experimentalUseInnerBlocksProps,
    store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

const useInnerBlocksProps = __stableUseInnerBlocksProps
    ? __stableUseInnerBlocksProps
    : __experimentalUseInnerBlocksProps;


const settings = {
    edit: (props) => {
        const {clientId, attributes} = props;
        const { columnsIds, hasChildBlocks, rootClientId } = useSelect(
            ( select ) => {
                const { getBlockOrder, getBlockRootClientId } = select(
                    blockEditorStore
                );

                const rootId = getBlockRootClientId( clientId );

                return {
                    hasChildBlocks: getBlockOrder( clientId ).length > 0,
                    rootClientId: rootId,
                    columnsIds: getBlockOrder( rootId ),
                };
            },
            [ clientId ]
        );
        const blockProps = useBlockProps({
            className: "blockx__slot",
        });
        const innerBlocksProps = useInnerBlocksProps(
            blockProps,
            {
                // templateLock,
                renderAppender: hasChildBlocks
                    ? undefined
                    : InnerBlocks.ButtonBlockAppender,
            }
        );
        return <div { ...innerBlocksProps } />;
    },

    save: () => {
        const blockProps = useBlockProps.save();
        blockProps.className = `${blockProps.className} blockx__slot`
        return (
            <div {...blockProps}>
                <InnerBlocks.Content/>
            </div>
        );
    },

}

export default settings;