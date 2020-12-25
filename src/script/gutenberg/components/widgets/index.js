
import NumberWidget from './NumberWidget.js'
import PostWidget from './PostWidget.js';
import SelectWidget from './SelectWidget.js';
import TaxQueryWidget from './TaxQueryWidget.js';
import TaxonomyTermWidget from './TaxonomyTermWidget.js';
import TextWidget from './TextWidget.js';
import ToggleWidget from './ToggleWidget.js';
import HiddenWidget from './HiddenWidget.js';
import DividerWidget from './DividerWidget.js';

const widgets = {
    text: TextWidget,
    number: NumberWidget,
    toggle: ToggleWidget,
    select: SelectWidget,
    taxonomy_term: TaxonomyTermWidget,
    tax_query: TaxQueryWidget,
    post: PostWidget,
    hidden: HiddenWidget,
    divider: DividerWidget,
}

export default widgets;