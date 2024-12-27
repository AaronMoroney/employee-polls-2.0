import * as React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { showAlert, hideAlert } from './actions';
import { alertSelector } from './selector';

export function useAlertState() {
	return useSelector(alertSelector);
}

export function useAlertActions() {
	const dispatch = useDispatch();

	const boundActions = React.useMemo(
		() =>
			bindActionCreators(
				{
					showAlert,
					hideAlert,
				},
				dispatch
			),
		[dispatch]
	);

	return boundActions;
}
