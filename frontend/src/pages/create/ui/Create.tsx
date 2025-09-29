import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
	Paper, 
	Box, 
	Typography, 
	Modal, 
	Button 
} from '@mui/material';
import { Close } from '@mui/icons-material';

import CreateModalCard from 'features/polls/ui/CreatePoll/CreatePollModal';

const styles = {
	modal__card__content: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	modal__card__parent: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		border: '1px solid slategrey',
		borderRadius: '30px',
		boxShadow: 24,
		p: 4,
	},
};

const PopUpModal = () => {
	const [openModal, setOpenModal] = React.useState(true);
	const navigate = useNavigate();

	const handleClose = () => {
		setOpenModal(false);
		navigate('/home');
	};

	return (
		<>
			<Modal open={openModal}>
				<Paper sx={styles.modal__card__parent}>
					<Box sx={styles.modal__card__content}>
						<Typography gutterBottom>Would you rather?</Typography>
						<Button onClick={handleClose}>
							<Close />
							CLOSE
						</Button>
					</Box>
					<CreateModalCard handleClose={handleClose} />
				</Paper>
			</Modal>
		</>
	);
};

export default PopUpModal;
