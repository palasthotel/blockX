import { useSelect } from '@wordpress/data';
import { buildOption } from '../utils/select';
import { useTranslation } from './useTranslation';

export const useFetchTaxonomyTerms = (taxonomy)=>{
    return useSelect(select=> select('core').getEntityRecords('taxonomy', taxonomy, {
            per_page: -1,
        }) || [], [taxonomy])
}

export const useFetchTaxonomyTermsAsOptionsWithDefaultAny = (taxonomy)=>{
    const terms = useFetchTaxonomyTerms(taxonomy);
    const {
        term_select_any
    } = useTranslation();
    return [
        buildOption("", term_select_any),
        ...terms.map(({name, id})=>buildOption(id, name)),
    ]
}