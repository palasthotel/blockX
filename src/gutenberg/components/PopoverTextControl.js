import {BaseControl, Popover, Spinner, TextControl} from "@wordpress/components";
import './PopoverTextControl.css';

const PopoverTextControl = (
    {
        label,
        value,
        onChange,
        onFocus,
        isLoading = false,
        showPopover = false,
        children,
    }
)=>{

    return <BaseControl className="blockx--popover-text-control">
        <div className="blockx--popover-text-control__input-wrapper">
            <TextControl
                label={label}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
            />
            {isLoading && (<span
                className="blockx--popover-text-control__spinner-wrapper"
            ><Spinner/></span>)}
        </div>

        { showPopover ? (
            <Popover
                focusOnMount={false}
                position="bottom center"
            >
                <div className="blockx--popover-text-control__popover">
                    {children}
                </div>
            </Popover>
        ) : null}
    </BaseControl>
}

export default PopoverTextControl;