import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { 
	Box, 
	Typography, 
	Modal, 
	Button, 
} from '@mui/material';
import { Close } from '@mui/icons-material';

import CreatePollModal from './CreatePollModal';

interface PopUpModalProps {
	openModal: boolean;
	setOpenModal: (open: boolean) => void;
}

const styles = {
	modal__card__parent: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	box:(theme: any) => ({
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		border: '1px solid slategrey',
		borderRadius: '30px',
		boxShadow: 24,
		p: 4,
		backgroundColor: 'theme.palette.background',
	}),
};

const PopUpModal: React.FC<PopUpModalProps> = ({ openModal, setOpenModal }) => {
	const navigate = useNavigate();

	const handleClose = () => {
		setOpenModal(false);
		navigate('/home');
	};

	// TODO: make this modal reusable, header text, and modal card

	return (
		<>
			<Modal open={openModal}>
				<Box sx={styles.box}>
					<Box sx={styles.modal__card__parent}>
						<Typography gutterBottom>Would you rather?</Typography>
						<Button onClick={handleClose}>
							<Close />
							CLOSE
						</Button>
					</Box>
					<CreatePollModal handleClose={handleClose} />
				</Box>
			</Modal>
		</>
	);
};

export default PopUpModal;
