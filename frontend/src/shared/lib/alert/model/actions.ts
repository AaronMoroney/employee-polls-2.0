import { createAction } from '@reduxjs/toolkit';

export const showAlert = createAction<{
	message: string;
	severity: string;
	isOpen: boolean;
}>('SHOW_ALERT');
export const hideAlert = createAction('HIDE_ALERT');
