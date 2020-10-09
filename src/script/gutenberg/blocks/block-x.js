import { registerBlockType } from '@wordpress/blocks'
import {InspectorControls} from '@wordpress/block-editor'
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody} from "@wordpress/components";
import ContentStructure from "../components/content-structure";



for( const {id, title, category, registerBlockTypeArgs, contentStructure} of BlockX.blocks){
    registerBlockType( id, {
        ...registerBlockTypeArgs,
        title,
        category,
        attributes: {
            content:{
                type: 'array',
                default: {},
            }
        },
        edit: (props) => {
            const {isSelected, className,  setAttributes, attributes} = props;
            const setContent = (content)=>{
                console.log("set", content)
                setAttributes({content})
            }
            return <>
                <InspectorControls>
                    <PanelBody>
                        <ContentStructure
                            definition={contentStructure}
                            content={attributes.content}
                            setContent={setContent}
                            autoSetDefaults={true}
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={className}>
                    <ServerSideRender
                        block={id}
                        attributes={attributes}
                    />
                </div>
            </>
        },
    });

}