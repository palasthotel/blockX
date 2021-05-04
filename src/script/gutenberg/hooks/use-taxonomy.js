import { useSelect } from '@wordpress/data';
import { buildOption } from '../utils/select';
import { useTranslation } from './use-translation';

export const useFetchTaxonomyTerms = (taxonomy, search, per_page = 25)=>{
    return useSelect(select=> {
        const query = { per_page, search};
        return {
            terms: select('core').getEntityRecords('taxonomy', taxonomy, query) || [],
            isResolving: select( 'core/data' ).isResolving( 'core', 'getEntityRecords', [ 'taxonomy', taxonomy, query ]),
        };
    }, [taxonomy, search]);
}

export const useFetchTaxonomyTermsByIds = (taxonomy, termIds) => {
    return useSelect(select=> {
        const query = {include: termIds, per_page: -1};
        return {
            terms: select('core').getEntityRecords('taxonomy', taxonomy, query) || [],
            isResolving: select( 'core/data' ).isResolving( 'core', 'getEntityRecords', [ 'taxonomy', taxonomy, query ]),
        }
    }, [taxonomy, termIds]);
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