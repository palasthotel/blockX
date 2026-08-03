import {TextareaControl, TextControl} from "@wordpress/components";

const textCounter = (length, maxChars) => {
    if (typeof maxChars !== "number" || maxChars <= 0) {
        return "";
    }
    return `${length}/${maxChars}`
}

const TextWidget = ({definition, value, onChange}) => {

    const {label, help = "", rows, max_chars} = definition;
    const onChangeValue = (value) => {

        if (typeof max_chars === "number" && value.length > max_chars) {
            return;
        }

        onChange(value);
    }

    const textCount = textCounter(value.length, max_chars);

    if (typeof rows !== 'number' || rows === 1) {
        return <TextControl
            label={label}
            value={value}
            onChange={onChangeValue}
            help={`${textCount} ${help}`}
        />
    }

    return <TextareaControl
        label={label}
        value={value}
        onChange={onChangeValue}
        rows={rows}
        help={`${textCount} ${help}`}
    />
}

export default TextWidget;