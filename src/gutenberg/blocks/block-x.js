import {registerBlockType} from '@wordpress/blocks'
import {InspectorControls, useBlockProps} from '@wordpress/block-editor'
import {useEffect, useState} from "@wordpress/element";
import Panels from '../components/panels';
import BlockContext from '../components/BlockContext';
import ServerSideRenderQueue from '../components/ServerSideRenderQueue';
import {useBlock} from '../hooks/use-context.js';
import {useAutoSaveTimeout} from "../hooks/use-settings";
import {usePreviewMode} from "../hooks/use-preview-mode";

const BlockXComponents = window.BlockXComponents = {
    ...(window.BlockXComponents || {}),
    // expose so others can use it
    ServerSideRenderQueue,
    useBlock,
};

BlockXComponents.widgets = {
    ...(window.BlockXComponents.widgets || {}),
};

for( const block of BlockX.blocks){

    const {id, title, category, registerBlockTypeArgs, contentStructure} = block;

    // ------------------------------
    // build default values
    // ------------------------------
    const defaultValues = {};
    for (const {defaultValue, key, options} of contentStructure) {
        if(typeof defaultValue !== typeof undefined){
            defaultValues[key] = defaultValue;
        } else if(typeof options === typeof [] && options.length > 0 && typeof options[0].value === typeof ""){
            defaultValues[key] = options[0].value;
        }
    }

    // ------------------------------
    // register block type
    // ------------------------------
    registerBlockType( id, {
        ...registerBlockTypeArgs,
        edit: (props) => {
            const {className,  setAttributes, attributes} = props;
            const blockProps = useBlockProps();

            // for local state changes 
            const [localChangeState, setLocalChangeState] = useState({});
            const changeLocalState = (key, value) => {
                setLocalChangeState(_state => ({
                    ...localChangeState,
                    [key]: value,
                }));
            }

            useEffect(()=>{
                // set once so attributes will always be present
                setContent({
                    ...defaultValues,
                    ...attributes.content,
                    ...localChangeState,
                });
            }, []);

            useAutoSaveTimeout(()=>{
                setContent({
                    ...attributes.content,
                    ...localChangeState,
                });
            }, localChangeState);

             // apply local changes to contents
            const setContent = (content)=> {
                setAttributes({content})
                setLocalChangeState({})
            }
            
            const Preview = BlockXComponents[id] || ServerSideRenderQueue;
            const previewMode = usePreviewMode();

            return <>

                <InspectorControls>
                    <BlockContext 
                        blockId={id} 
                        contentStructure={contentStructure}
                        defaultValues={defaultValues}
                        attributes={attributes}
                        content={attributes.content}
                        setContent={setContent}
                        changeLocalState={changeLocalState}
                        localChanges={localChangeState}
                    >
                        <Panels
                            definition={contentStructure}
                            content={attributes.content}
                            setContent={setContent}
                        />
                    </BlockContext>
                </InspectorControls>

                <div {...blockProps} className={`${blockProps.className ?? ""} preview-mode-${previewMode.toLowerCase()}`}>
                    <BlockContext 
                        blockId={id} 
                        contentStructure={contentStructure}
                        defaultValues={defaultValues}
                        attributes={attributes}
                        content={attributes.content}
                        setContent={setContent}
                        changeLocalState={changeLocalState}
                        localChanges={localChangeState}
                    >
                        <Preview
                            block={id}
                            attributes={attributes} // for ssr
                            content={attributes.content} // for js preview
                        />
                    </BlockContext>
                </div>

            </>
        },
    });

}