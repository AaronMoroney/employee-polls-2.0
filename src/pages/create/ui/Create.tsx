import * as React from 'react';
import { 
  Box, 
  Typography, 
  Modal, 
  Button, 
  useTheme,
} from '@mui/material';
import { Close } from '@mui/icons-material';

import ModalCard from 'features/polls/ui/ModalCard';

const styles = {
    modal__card__content : {
      display: 'flex',
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between'
    }, 
    modal__card__parent : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        border: '1px solid slategrey',
        borderRadius: '30px',
        boxShadow: 24,
        p: 4,
        // backgroundColor: theme.palette.background.paper
    },
  }

const PopUpModal = () => {
  const [openModal, setOpenModal] = React.useState(true);
  // const theme = useTheme();

  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <Modal
        open={openModal}
      >
        <Box sx={styles.modal__card__parent}>
          <Box sx={styles.modal__card__content}>
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