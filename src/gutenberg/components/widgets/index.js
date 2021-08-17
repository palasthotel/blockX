import NumberWidget from './NumberWidget.js'
import PostWidget from './PostWidget.js';
import UserWidget from './UserWidget.js';
import SelectWidget from './SelectWidget.js';
import TaxQueryWidget from './TaxQueryWidget.js';
import TaxonomyTermWidget from './TaxonomyTermWidget.js';
import TextWidget from './TextWidget.js';
import TextareaWidget from "./TextareaWidget";
import ToggleWidget from './ToggleWidget.js';
import HiddenWidget from './HiddenWidget.js';
import DividerWidget from './DividerWidget.js';
import ReadonlyWidget from './ReadonlyWidget.js';
import MediaWidget from "./MediaWidget";
import ListOfWidget from "./ListOfWidget";
import AutoSuggestWidget from "./AutoSuggestWidget";
import UrlWidget from "./UrlWidget";
import InfoWidget from "./InfoWidget";

const widgets = {
    text: TextWidget,
    textarea: TextareaWidget,
    number: NumberWidget,
    toggle: ToggleWidget,
    select: SelectWidget,
    taxonomy_term: TaxonomyTermWidget,
    tax_query: TaxQueryWidget,
    post: PostWidget,
    user: UserWidget,
    hidden: HiddenWidget,
    divider: DividerWidget,
    info: InfoWidget,
    readonly: ReadonlyWidget,
    media: MediaWidget,
    url: UrlWidget,
    auto_suggest: AutoSuggestWidget,
    list_of: ListOfWidget,
}

export default widgets;