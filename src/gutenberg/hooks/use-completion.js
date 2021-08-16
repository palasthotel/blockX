import {useFetchTaxonomyTerms} from "./use-taxonomy";
import {useFetchPosts} from "./use-posts";
import {useAjax} from "./use-ajax";
import {useFetchUsers} from "./use-users";

// hooks for AutoCompletionTextControl

export const useTaxonomyTermsCompletionFactory = (taxonomy) => (query) => {
    const {terms, isResolving} = useFetchTaxonomyTerms(taxonomy, query);
    return [terms, isResolving];
}

export const usePostsCompletionFactory = (post_types, post_status, use_context) => (query) => {
    const {posts, isLoading} = useFetchPosts(query, post_types, post_status, use_context);
    return [posts, isLoading];
}

export const useUsersCompletionFactory = (roles, use_context) => (query) => {
    const {users, isLoading} = useFetchUsers(query, roles, use_context);
    return [users, isLoading];
}

export const useGenericAjaxCompletionFactory = (widgetKey) => (params) => {
    const {results: items, isLoading} = useAjax(widgetKey, params);
    return [
        items,
        isLoading,
    ];
}