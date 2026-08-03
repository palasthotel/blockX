import AutoSuggestWidget from "./AutoSuggestWidget";
import './UrlWidget.css';

const UrlWidget = (props)=>{
    const {onChange} = props;
    return <AutoSuggestWidget
        {...props}
        renderItem={(item, closePopover)=>{
            return <div
                key={item.value}
                onClick={()=>{
                    onChange(item.value);
                    closePopover();
                }}
                className="blockx-url__suggestion"
            >
                {item.label}<br />
                <i>{item.value}</i>
            </div>
        }}
    />
}

export default UrlWidget;