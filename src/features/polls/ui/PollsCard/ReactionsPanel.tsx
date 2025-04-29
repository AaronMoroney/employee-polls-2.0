import { Box, TextField, Avatar, Divider, Button, Typography, Chip } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';

import { Poll } from 'entities/questions/model/types';

interface PollsEngagementProps {
	poll: Poll;
}

const styles = {
	card__content: {
		padding: '4px 16px',
		margin: '10px 0px',
		backgroundColor: '#2b2e38',
		borderRadius: '20px',
	},
	addComment: {
		display: 'flex',
		flexDirection: 'row', 
		alignItems: 'center', 
		margin: '10px 0px',
	},
    avatar: {
		width: 30,
		height: 30,
		marginRight: '10px',
	},
	comments: {
		Height: '20vh',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: '10px 0px',
	}
};

const ReactionsPanel: React.FC<PollsEngagementProps> = (props) => {
	const { poll } = props;

	return (
		<>
			<Box sx={styles.card__content}>
				<Box sx={styles.comments}>
                    <Avatar sx={styles.avatar} />
					<Typography>a comment</Typography>
				</Box>
                <Divider>
					<Chip label="join the discussion"/>
				</Divider>
				<Box sx={styles.addComment}>
                    <Avatar sx={styles.avatar} />
                    <TextField 
                        fullWidth 
                        label="Add a comment" 
                    />
                    <Button>
                        <AddCommentIcon />
                    </Button>
                </Box>
			</Box>
		</>
	);
};

export default ReactionsPanel;
