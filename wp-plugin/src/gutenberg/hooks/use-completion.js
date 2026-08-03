import {useFetchTaxonomyTerms} from "./use-taxonomy";
import {useFetchPosts} from "./use-posts";
import {useFetchUsers} from "./use-users";
import {useCallback} from "@wordpress/element";
import {useFetchAjax} from "./use-ajax";

// hooks for AutoCompletionTextControl

// TODO: check for performance issues

export const useTaxonomyTermsCompletionFactory = (taxonomy) => useCallback((query) => {
    const {terms, isResolving} = useFetchTaxonomyTerms(taxonomy, query);
    return [terms, isResolving];
}, [taxonomy]);

export const usePostsCompletionFactory = (post_types, post_status, use_context) => useCallback((query) => {
    const {posts, isLoading} = useFetchPosts(query, post_types, post_status, use_context);
    return [posts, isLoading];
}, [post_types, post_status, use_context]);

export const useUsersCompletionFactory = (roles, use_context) => useCallback((query) => {
    const {users, isLoading} = useFetchUsers(query, roles, use_context);
    return [users, isLoading];
},[roles, use_context]);

export const useAjaxCompletionFactory = (widgetKeyFullPath) => useCallback((query) => {
    const {items, isLoading} = useFetchAjax(query, widgetKeyFullPath);
    return [items, isLoading];
}, [widgetKeyFullPath]);