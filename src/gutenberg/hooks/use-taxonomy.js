import { useSelect, select } from '@wordpress/data';
import { buildOption } from '../utils/select';
import { useTranslation } from './use-translation';
import {useEffect, useState} from "@wordpress/element";
import {getTaxonomyTerms, isResolvingTaxonomyTerms} from "../data/taxonomy";

const useFetchTaxonomyTermsQuery = (taxonomy, query, deps) => {
    const isResolving = useSelect(
        select => isResolvingTaxonomyTerms(taxonomy, query),
        [taxonomy, ...deps]
    );
    const [terms, setTerms] = useState([]);
    useEffect(()=>{
        setTerms(getTaxonomyTerms(taxonomy, query));
    }, [isResolving, taxonomy, ...deps]);

    return {
        terms,
        isResolving,
    };
}

export const useFetchTaxonomyTerms = (taxonomy, search, per_page = 25)=>{
    return useFetchTaxonomyTermsQuery(
        taxonomy,
        { per_page, search},
        [search, per_page]
    );
}

export const useFetchTaxonomyTermsByIds = (taxonomy, termIds) => {
    return useFetchTaxonomyTermsQuery(
        taxonomy,
        {include: termIds},
        [termIds.join(",")]
    );
}

export const useFetchTaxonomyTermById = (taxonomy, termId) => {
    const {terms, isResolving} = useFetchTaxonomyTermsByIds(taxonomy, [termId]);
    return {
        term: terms.length === 1 ? terms[0] : null,
        isResolving,
    }
}

export const useFetchTaxonomyTermsAsOptionsWithDefaultAny = (taxonomy)=>{
    const {terms} = useFetchTaxonomyTerms(taxonomy, "", -1);
    const {
        term_select_any
    } = useTranslation();
    return [
        buildOption("", term_select_any),
        ...terms.map(({name, id})=>buildOption(id, name)),
    ]
}