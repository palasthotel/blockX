import { useSelect } from '@wordpress/data';
import { buildOption } from '../utils/select';
import { useTranslation } from './useTranslation';

export const useFetchPosts = ({s, post_types})=>{

    return useSelect(select=> select('core').getEntityRecords('post', taxonomy, {
            per_page: -1,
        }) || [], [taxonomy])
}