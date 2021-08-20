import {Button} from "@wordpress/components";
import {MediaUpload, MediaUploadCheck} from '@wordpress/block-editor'
import {useTranslationWidgetMedia} from "../../hooks/use-translation";
import {useMedia} from "../../hooks/use-media";
import './MediaWidget.css';

const MediaPreviewWrapper = (
    {
        type = "any",
        isLoading = false,
        error = "",
        children,
    }
) => {
    const loading = isLoading ? "blockx-media-widget__preview--is-loading" : "";
    const hasError = error !== "" ? "blockx-media-widget__preview--has-error" : "";
    return <div className={`blockx-media-widget__preview--item blockx-media-widget__preview--${type} ${loading} ${hasError}`}>
        {children}
        {
            hasError &&
            <div className="blockx-media-widget__preview--error">{error}</div>
        }
    </div>
}

const MediaPreview = ({ ID, minHeight, minWidth, maxHeight, maxWidth }) => {

    const {
        not_found,
    } = useTranslationWidgetMedia();
    const {media, isLoading} = useMedia(ID);

    if (isLoading) {
        return <MediaPreviewWrapper isLoading={true}>
            <span
                className="spinner is-active"
            />
        </MediaPreviewWrapper>
    }

    if (media?.media_type === "image") {
        if (!media?.media_details?.sizes?.thumbnail?.source_url) {
            return <span className="blockx-media-widget__404">{not_found}</span>;
        }

        const width = media.media_details.width;
        const height = media.media_details.height;

        let restrictionInfo = [];
        if(minWidth > 0 && width < minWidth){
            restrictionInfo.push(<>{`width ${width}px < min width ${minWidth}px`}<br/></>);
        }
        if(minHeight > 0 && height < minHeight){
            restrictionInfo.push(<>{`height ${height}px < min height ${minHeight}px`}<br/></>);
        }
        if(maxWidth > 0 && width > maxWidth){
            restrictionInfo.push(<>{`width ${width}px > max width ${maxWidth}px`}<br/></>);
        }
        if(maxHeight > 0 && height > maxHeight){
            restrictionInfo.push(<>{`height ${height}px > max height ${maxHeight}px`}<br/></>);
        }

        return <MediaPreviewWrapper type="image" error={restrictionInfo.length ? <p>{restrictionInfo}</p> : ""}>
            <img src={media.media_details.sizes.thumbnail.source_url} />
        </MediaPreviewWrapper>
    }

    if (!media?.source_url) {
        return <span className="blockx-media-widget__404">{not_found}</span>;
    }

    const title = media?.title?.rendered ? media.title.rendered : media.source_url;

    return <MediaPreviewWrapper>
        <p><a href={media.source_url} target="_blank">{title}</a></p>
    </MediaPreviewWrapper>

};

const SizeRestrictionInfo = (props)=>{
    const {minWidth, maxWidth, minHeight, maxHeight} = props;
    const hasSizeRestriction = minWidth > 0 || maxWidth > 0 || minHeight > 0 || maxHeight > 0;
    if(!hasSizeRestriction) return null;

    return <p className="description">
        {minWidth > 0 && <><span>Min width: {minWidth}px</span><br/></>}
        {maxWidth > 0 && <><span>Max width: {maxWidth}px</span><br/></>}
        {minHeight > 0 && <><span>Min height: {minHeight}px</span><br/></>}
        {maxHeight > 0 && <><span>Max height: {maxHeight}px</span><br/></>}
    </p>
}

const MediaWidget = ({definition, value, onChange}) => {

    const {
        label,
        mediaTypes,
        multiple,
        mediaUploadTitle,
    } = definition;

    const {
        no_permission,
    } = useTranslationWidgetMedia();

    const handleSelection = (value) => {
        if (Array.isArray(value)) {
            onChange(value.map(media => media.id));
        } else {
            onChange(value.id);
        }
    }

    const handleDeleteAll = ()=>{
        if (Array.isArray(value)) {
            onChange([]);
        } else {
            onChange("");
        }
    }

    const isNotEmpty = (Array.isArray(value) && value.length > 0) || value !== "";
    const isEmpty = !isNotEmpty;

    return <div className={`blockx-media-widget ${multiple ? "blockx-media-widget__multiple" : ""}`}>
        <MediaUploadCheck
            fallback={<p>${no_permission}</p>}
        >
            <div className="blockx-media-widget__control">
                <MediaUpload
                    title={mediaUploadTitle.length > 0 ? mediaUploadTitle : undefined}
                    allowedTypes={mediaTypes.length > 0 ? mediaTypes : undefined}
                    multiple={multiple}
                    gallery={false}
                    value={value}
                    onSelect={handleSelection}
                    render={({open}) => {
                        return <Button isSecondary onClick={() => open()}>
                            {label}
                        </Button>
                    }}
                />
                {
                    isNotEmpty &&
                    <Button icon="trash" className="blockx-media-widget__btn-clear" onClick={handleDeleteAll} />
                }
            </div>
            {isEmpty && <SizeRestrictionInfo {...definition} />}
            <div className="blockx-media-widget__preview">
                {Array.isArray(value) ?
                    value.map(id => <MediaPreview key={id} {...definition} ID={id} />)
                    :
                    (value ? <MediaPreview ID={value} {...definition} /> : null)
                }
            </div>

        </MediaUploadCheck>
    </div>
};

export default MediaWidget;