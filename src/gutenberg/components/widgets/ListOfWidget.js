import {BaseControl, Button} from "@wordpress/components";
import cloneDeep from 'lodash/cloneDeep'
import ContentStructure from "../content-structure";
import './ListOfWidget.css';
import {useEffect} from "@wordpress/element";

const ListOfWidget = ({definition, value, savedState, onChange})=> {

    const {
        label,
        key,
        parentPath,
        max_items = 0,
        min_items = 0,
    } = definition;

    const isExact = max_items === min_items && min_items > 0;

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

    useEffect(() => {
        if(value.length >= min_items) return;
        const newValues = Array.from(Array(min_items-value.length).keys()).map(_=> {
            const newItem = {};
            definition.contentStructure.forEach(widget=>{
                newItem[widget.key] = structuredClone(definition?.defaultValues[widget.key]);
            });
            return newItem;
        })
        onChange([
            ...value,
            ...newValues,
        ]);
    }, [min_items, value.length]);

    const onClear = ()=>{
        onChange(value.splice(0, min_items));
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
            return <div className="blockx-list-of-widget__item" data-number-of-widgets={definition.contentStructure.length} key={index}>
                <ContentStructure
                    items={definition.contentStructure}
                    value={instanceValue}
                    savedState={itemSavedState}
                    parentPath={parentPath+key+"."}
                    onChange={(widgetKey, widgetValue)=>onChangeItem(index, widgetKey, widgetValue)}
                />
                <div className="blockx-list-of-widget__item--control">
                    <div className="blockx-list-of-widget__item--control-move">
                        <Button
                            icon="arrow-up"
                            variant="secondary"
                            isSmall
                            disabled={index === 0}
                            onClick={()=>onUp(index)}
                            label="Move item up"
                        ></Button>
                        <Button
                            icon="arrow-down"
                            variant="secondary"
                            isSmall
                            disabled={index >= value.length-1}
                            onClick={()=>onDown(index)}
                            label="Move item down"
                        ></Button>
                    </div>
                    {!isExact ?
                        <Button
                            icon="trash"
                            variant="secondary"
                            isDestructive
                            isSmall
                            disabled={value.length <= min_items}
                            onClick={()=> onDeleteItem(index)}
                            label="Delete item"
                        ></Button>
                        :
                        null
                    }

                </div>
            </div>
        })}
        </div>
        {!isExact ?
            <>
                <div className="blockx-list-of-widget__control">
                    <Button
                        icon="plus"
                        variant="secondary"
                        isSmall
                        disabled={max_items > 0 && value.length >= max_items}
                        onClick={onAdd}
                        label={`Add item ${max_items > 0 ? `${Math.min(value.length+1, max_items)}/${max_items}` : ""}`}
                    >{max_items > 0 ? `${Math.min(value.length+1, max_items)}/${max_items}` : null}</Button>
                    <Button
                        icon="trash"
                        variant="secondary"
                        isDestructive
                        isSmall
                        disabled={value.length <= min_items}
                        onClick={onClear}
                    >
                        All
                    </Button>
                </div>
            </>
            : null
        }
    </BaseControl>
}

export default ListOfWidget;
