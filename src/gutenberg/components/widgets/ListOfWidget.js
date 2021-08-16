import {BaseControl, Button} from "@wordpress/components";
import cloneDeep from 'lodash/cloneDeep'
import ContentStructure from "../content-structure";
import './ListOfWidget.css';

const ListOfWidget = ({definition, value, savedState, onChange})=> {

    const {
        label,
        key,
        parentPath,
    } = definition;

    const onAdd = ()=>{
        const newItem = {};
        definition.contentStructure.forEach(widget=>{
           newItem[widget.key] = definition?.defaultValues[widget.key];
        });
        onChange([
            ...value,
            newItem,
        ]);
    }

    const onClear = ()=>{
        onChange([]);
    }

    const onChangeItem = (index, widgetKey, widgetValue)=>{
        const newValue = cloneDeep(value);
        newValue[index][widgetKey] = widgetValue;
        onChange(newValue);
    }

    const onSwitchPositions = (indexA, indexB) => {
        onChange(value.map((item, index)=>{
            if(index === indexA){
                return {...value[indexB]};
            }
            if(index === indexB){
                return {...value[indexA]};
            }
            return item;
        }));
    }

    const onUp = (index)=> onSwitchPositions(index, index-1);
    const onDown = (index)=> onSwitchPositions(index, index+1);

    const onDeleteItem = (index)=>{
        onChange(value.filter((item, i)=> i !== index ));
    }

    return <BaseControl
        className="blockx-list-of-widget"
        label={label}
    >
        <div className="blockx-list-of-widget__body">
        {value.map((instanceValue, index )=> {
            const itemSavedState = Array.isArray(savedState) && savedState.length > index ? savedState[index] : undefined;
            return <div className="blockx-list-of-widget__item" key={index}>
                <div className="blockx-list-of-widget__item--control blockx-list-of-widget__item--control-top">
                    <Button
                        icon="arrow-up"
                        isSecondary
                        isSmall
                        disabled={index === 0}
                        onClick={()=>onUp(index)}
                    >
                        Up
                    </Button>
                </div>
                <ContentStructure
                    items={definition.contentStructure}
                    value={instanceValue}
                    savedState={itemSavedState}
                    parentPath={parentPath+key+"."}
                    onChange={(widgetKey, widgetValue)=>onChangeItem(index, widgetKey, widgetValue)}
                />
                <div className="blockx-list-of-widget__item--control blockx-list-of-widget__item--control-bottom">
                    <Button
                        icon="arrow-down"
                        isSecondary
                        isSmall
                        disabled={index >= value.length-1}
                        onClick={()=>onDown(index)}
                    >
                        Down
                    </Button>
                    <Button
                        icon="trash"
                        isSecondary
                        isSmall
                        isDestructive
                        disabled={value.length === 0}
                        onClick={()=>onDeleteItem(index)}
                    >
                        Delete item
                    </Button>
                </div>
            </div>
        })}
        </div>
        <div className="blockx-list-of-widget__control">
            <Button
                icon="plus"
                isSecondary
                isSmall
                onClick={onAdd}
            >
                Add list item
            </Button>
            <Button
                icon="trash"
                isSecondary
                isSmall
                isDestructive
                disabled={value.length === 0}
                onClick={onClear}
            >
                Delete all items
            </Button>
        </div>
    </BaseControl>
}

export default ListOfWidget;