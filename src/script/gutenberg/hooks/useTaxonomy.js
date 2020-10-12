import { useSelect } from '@wordpress/data';

export const useFetchTaxonomyTerms = (taxonomy)=>{
    return useSelect(select=> select('core').getEntityRecords('taxonomy', taxonomy, {
            per_page: -1,
        }) || [])
}