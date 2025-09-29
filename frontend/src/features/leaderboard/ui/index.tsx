import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';

import { User } from 'entities/users/model/types';
import TableCells from './TableCells';
import { findUserPosition } from 'shared/helpers/leaderboard';

interface TableProps {
	users: User[];
}

const POSITION = 1;

const TableUI: React.FC<TableProps> = (props) => {
	const { users } = props;

	const positionedUsers = users && findUserPosition(users);

	return (
		<>
			<TableContainer>
				<Table sx={{ minWidth: 650 }} aria-label='leaderboard'>
					<TableHead>
						<TableRow>
							<TableCell>name</TableCell>
							<TableCell align='right'>questions</TableCell>
							<TableCell align='right'>answers</TableCell>
							<TableCell align='right'>score</TableCell>
							<TableCell align='right'>
								total engagement
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{positionedUsers &&
							Object.keys(positionedUsers).map(
								(userId, index) => {
									//@ts-ignore
									const user = positionedUsers?.[userId];
									const currentPosition = POSITION + index;

									return (
										<TableRow key={user.id}>
											<TableCells
												userId={user.id}
												user={user.email}
												questions={user.questions}
												answers={user.answers}
												position={currentPosition}
												avatar={user.avatarURL}
											/>
										</TableRow>
									);
								}
							)}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default TableUI;
