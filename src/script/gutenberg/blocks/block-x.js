import { registerBlockType } from '@wordpress/blocks'
import {InspectorControls} from '@wordpress/block-editor'
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody} from "@wordpress/components";
import ContentStructure from "../components/content-structure";

const BlockXPreviews = window.BlockXPreviews || {};

for( const {id, title, category, registerBlockTypeArgs, contentStructure} of BlockX.blocks){

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
        title,
        category,
        attributes: {
            content:{
                type: 'object',
                default: defaultValues,
            }
        },
        edit: (props) => {
            const {isSelected, className,  setAttributes, attributes} = props;
            const setContent = (content)=> {
                console.log("set attributes", content)
                setAttributes({content})
            }
            
            const Preview = BlockXPreviews[id] || ServerSideRender;

            return <>
                <InspectorControls>
                    <PanelBody>
                        <ContentStructure
                            definition={contentStructure}
                            content={attributes.content}
                            setContent={setContent}
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={className}>
                    <Preview
                        block={id}
                        attributes={attributes} // for ssr
                        content={attributes.content} // for js preview
                    />
                </div>
            </>
        },
    });

}