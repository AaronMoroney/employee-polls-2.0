import { 
    TableCell, 
    Avatar,
    Typography,
} from "@mui/material";

// TODO: define users types
import { UserAnswers } from "entities/users/model/types";

interface CellsProp {
    user: string;
    answers: UserAnswers;
    questions: string[];
    avatar: string | null;
    position: number;
}

const styles = {
    avatar__header: {
        display: 'flex',
        alignItems: 'center'
    },
    gap: {
        marginRight: '10px'
    }
}

const TableCells: React.FC<CellsProp> = (props) => {
    const { questions, answers, user, position} = props;

    const questionsTally = questions.length;
    const answersTally = Object.keys(answers).length;
    const engagement = questionsTally + answersTally

    return (
        <>
            <TableCell component="th" scope="row" sx={styles.avatar__header}>
                <Typography sx={styles.gap} >{position}</Typography>
                <Avatar sx={styles.gap} />
                <Typography sx={styles.gap} >{user}</Typography>
            </TableCell>
            <TableCell align="right">{questionsTally}</TableCell>
            <TableCell align="right">{answersTally}</TableCell>
            <TableCell align="right">{engagement}</TableCell>
        </>
    )
}

export default TableCells