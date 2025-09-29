import * as React from 'react';
import { 
	Snackbar, 
	Slide, 
	Alert, 
	IconButton 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useAlertState } from 'shared/lib/alert/model';
import { useAlertActions } from 'shared/lib/alert/model';

export const AlertBar = () => {
	const { isOpen, message, severity } = useAlertState();
	const { hideAlert } = useAlertActions();

	const severityStyle = (severity: string) => {
		switch (severity) {
			case 'success':
				return 'success';
			case 'info':
				return 'info';
			case 'warning':
				return 'warning';
			case 'error':
				return 'error';
			default:
				return 'info';
		}
	};

	return (
		<>
			<Snackbar
				open={isOpen}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				TransitionComponent={Slide}
				autoHideDuration={6000} 
			>
				<Alert 
					severity={severityStyle(severity)} 
					variant='filled' 
					role='alert'
					action={
						<IconButton
							aria-label="close"
							color="inherit"
							size="small"
							onClick={() => hideAlert()}
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>
					}>
					{message}
				</Alert>
			</Snackbar>
		</>
	);
};
