import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { 
  Box, 
  Typography, 
  Modal, 
  Button, 
  useTheme,
} from '@mui/material';
import { Close } from '@mui/icons-material';

import ModalCard from './ModalCard';

interface PopUpModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const PopUpModal: React.FC<PopUpModalProps> = ({ openModal, setOpenModal}) => {
  const theme = useTheme();

  const style = useMemo(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '1px solid slategrey',
    borderRadius: '30px',
    boxShadow: 24,
    p: 4,
    backgroundColor: theme.palette.background.paper
  }), [theme]);

  const styles = {
    modal__card__parent : {
      display: 'flex',
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between'
    }
  }

  const navigate = useNavigate();

  const handleClose = () => {
    setOpenModal(false)
    navigate('/');
  }

  return (
    <>
      <Modal
        open={openModal}
      >
        <Box sx={style}>
          <Box sx={styles.modal__card__parent}>
            <Typography
              gutterBottom
            >
              Would you rather?
            </Typography>
            <Button
              onClick={handleClose}
            >
              <Close />
              CLOSE
            </Button>
          </Box>
          <ModalCard/>
         </Box>
      </Modal>
    </>
  );
}

export default PopUpModal