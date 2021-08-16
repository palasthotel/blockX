import {useFetchTaxonomyTerms} from "./use-taxonomy";
import {useFetchPosts} from "./use-posts";

// hooks for AutoCompletionTextControl

export const useTaxonomyTermsCompletionFactory = (taxonomy) => (query) => {
    const {terms, isResolving} = useFetchTaxonomyTerms(taxonomy, query);
    return [terms, isResolving];
}

export const usePostsCompletionFactory = (post_types, post_status, use_context) => (query) => {
    const {posts, isLoading} = useFetchPosts(query, post_types, post_status, use_context);
    return [posts, isLoading];
}