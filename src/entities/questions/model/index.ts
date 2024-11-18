import * as React from 'react';
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { fetchPostsSuccess, fetchPostsError, fetchPosts } from './actions';
import { questionsSelector } from './selectors';

export function useQuestionsState() {
    return useSelector(questionsSelector);
}

export function useQuestionsActions() {
    const dispatch = useDispatch();

    const boundActions = React.useMemo(
        () => 
            bindActionCreators({
                fetchPosts,
                fetchPostsSuccess,
                fetchPostsError,
            }, 
            dispatch
        ),
        [dispatch]
    );

    return boundActions;
}

