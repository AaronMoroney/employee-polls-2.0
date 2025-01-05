import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Typography,
	Button,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	Box,
	Divider,
	Select,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { usePollActions } from 'entities/questions/model';
import { useIsAuthState } from 'entities/authUsers/model';

interface ModalCardProps {
	handleClose: () => void;
}

const styles = {
	modal__parent: {
		height: '200px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	question__container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
};

const CreatePollModal: React.FC<ModalCardProps> = (props) => {
	const { handleClose } = props;
	const [optionOne, setOptionOne] = React.useState('');
	const [optionTwo, setOptionTwo] = React.useState('');
	const { selectAuthUser } = useIsAuthState();
	const { addPoll } = usePollActions();

	const navigate = useNavigate();

	const handleOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		switch (name) {
			case 'option1':
				setOptionOne(value);
				break;
			case 'option2':
				setOptionTwo(value);
				break;
			default:
				break;
		}
	};

	const handleCreatePoll = () => {
		addPoll({
			author: selectAuthUser,
			optionOne: optionOne,
			optionTwo: optionTwo,
		});
		handleClose();
		navigate('/home');
	};

	return (
		<>
			<Box sx={styles.modal__parent}>
				<FormControl fullWidth>
					<InputLabel htmlFor='outlined-adornment-amount-1'>
						Option 1
					</InputLabel>
					<OutlinedInput
						onChange={handleOptions}
						startAdornment={
							<InputAdornment position='start'>1</InputAdornment>
						}
						label='option1'
						name='option1'
					/>
				</FormControl>
				<Box sx={styles.question__container}>
					<Divider />
					<Typography>OR</Typography>
					<Divider />
				</Box>
				<FormControl fullWidth>
					<InputLabel htmlFor='outlined-adornment-amount-2'>
						Option 2
					</InputLabel>
					<OutlinedInput
						onChange={handleOptions}
						id='outlined-adornment-amount'
						startAdornment={
							<InputAdornment position='start'>2</InputAdornment>
						}
						label='option2'
						name='option2'
					/>
				</FormControl>
			</Box>
			<Button
				fullWidth
				variant='contained'
				disabled={optionOne === '' || optionTwo === ''}
				onClick={handleCreatePoll}
			>
				<AddIcon />
				CREATE POLL
			</Button>
		</>
	);
};

export default CreatePollModal;
