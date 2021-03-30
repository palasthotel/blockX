import {Button} from "@wordpress/components";
import {MediaUpload, MediaUploadCheck} from '@wordpress/block-editor'
import {useTranslationWidgetMedia} from "../../hooks/use-translation";
import {useMedia} from "../../hooks/use-media";
import './MediaWidget.css';

const MediaPreviewWrapper = ({children, type = "any", isLoading = false}) => {
    const loading = isLoading ? "blockx-media-widget__preview--is-loading" : "";
    return <div className={`blockx-media-widget__preview--item blockx-media-widget__preview--${type} ${loading}`}>
        {children}
    </div>
}

const MediaPreview = ({ID}) => {

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

        return <MediaPreviewWrapper type="image">
            <img
                src={media.media_details.sizes.thumbnail.source_url}
            />
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

const MediaWidget = ({definition, value, onChange}) => {

    const {
        label,
        mediaTypes,
        multiple,
        mediaUploadTitle
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
            </div>
            <div className="blockx-media-widget__preview">
                {Array.isArray(value) ?
                    value.map(id => <MediaPreview key={id} ID={id}/>)
                    :
                    (value ? <MediaPreview ID={value}/> : null)
                }
            </div>

        </MediaUploadCheck>
    </div>
};

export default MediaWidget;