import { useSelector } from 'react-redux';
import { TableCell, Avatar, Typography } from '@mui/material';

import { useUsersState } from 'entities/users/model';

interface CellsProp {
	userId: string;
	user: string;
	answers: string[];
	questions: string[];
	avatar: string | null;
	position: number;
}

const styles = {
	avatar__header: {
		display: 'flex',
		alignItems: 'center',
	},
	gap: {
		marginRight: '10px',
	},
};

const TableCells: React.FC<CellsProp> = (props) => {
	const { 
        questions, 
        answers, 
        user, 
        position, 
        userId 
    } = props;
	const { selectUserEngagementScore } = useUsersState();

	const engagement = useSelector(
        selectUserEngagementScore(userId)
    );

	return (
		<>
			<TableCell component='th' scope='row' sx={styles.avatar__header}>
				<Typography sx={styles.gap}>{position}</Typography>
				<Avatar sx={styles.gap} />
				<Typography sx={styles.gap}>{user}</Typography>
			</TableCell>
			<TableCell align='right'>{questions.length}</TableCell>
			<TableCell align='right'>{answers.length}</TableCell>
			<TableCell align='right'>
				{answers.length + questions.length}
			</TableCell>
			<TableCell align='right'>{engagement}%</TableCell>
		</>
	);
};

export default TableCells;
