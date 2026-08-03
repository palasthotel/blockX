import {select} from '@wordpress/data';

export const isResolvingTaxonomyTerms = (taxonomy, query) => {
    return select( 'core/data' ).isResolving( 'core', 'getEntityRecords', [ 'taxonomy', taxonomy, query ])
}

export const getTaxonomyTerms = (taxonomy, query) => {
    return select('core').getEntityRecords('taxonomy', taxonomy, query) || [];
}