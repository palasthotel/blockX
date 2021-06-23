
import { __, sprintf } from '@wordpress/i18n';
import { Placeholder, Spinner } from "@wordpress/components";
import { RawHTML } from "@wordpress/element";
import { useIsInRenderQueue, useIsRequestingBlock, useSSR } from "../hooks/use-store";
import './ServerSideRenderQueue.css';

const LoadingWrapper = ({isLoading, children}) => {
    return <div className="blockx--ssr__wrapper">
        {children}
        {isLoading && <span className="loader"><Spinner /></span>}
    </div>
}

const ServerSideRenderQueue = ({
    block,
    content,
    attributes
})=>{
    if(typeof attributes === "undefined"){
        // fallback to old behavior
        console.warn("Using content attribute with ServerSideRenderQueue is deprecated. Please provide the complete attribute object of the block.");
        attributes = {content};
    }
    const html = useSSR(block, attributes);
    const isRequesting = useIsRequestingBlock(block, attributes);
    const isInRenderQueue = useIsInRenderQueue(block, attributes);
    const isLoading = isRequesting || isInRenderQueue;

    if( false === html ){
        return <LoadingWrapper isLoading={isLoading}>;
            <Placeholder>
                {sprintf(__( 'Error loading block: %s'), block )}
            </Placeholder>
        </LoadingWrapper>
    }

    if(typeof html === typeof undefined) {
        const msg = __( 'Block rendered as empty.' );
        return <LoadingWrapper isLoading={isLoading}>
            <Placeholder>
                {!isLoading ? msg : __("Loading")}
            </Placeholder>
        </LoadingWrapper>
    }

    return <LoadingWrapper isLoading={isLoading}>
        <RawHTML key="html">{html}</RawHTML>
    </LoadingWrapper>

}

export default ServerSideRenderQueue;