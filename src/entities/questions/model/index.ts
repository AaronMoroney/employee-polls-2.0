import * as React from 'react';
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { fetchPostsSuccess, fetchPostsError, fetchPosts } from './actions';
import { AppState } from 'app/providers/with-redux/types';

export function useQuestionsState() {
    return useSelector((state: AppState) => state.questions);
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

