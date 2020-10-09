
import NumberWidget from './number-widget.js'
import SelectWidget from './select-widget.js';
import TaxQueryWidget from './tax-query-widget.js';
import TextWidget from './text-widget.js';

const widgets = {
    text: TextWidget,
    number: NumberWidget,
    select: SelectWidget,
    tax_query: TaxQueryWidget,
}

export default widgets;