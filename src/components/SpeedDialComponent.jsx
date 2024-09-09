// src/components/SpeedDialComponent.jsx

import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import theme from '../Theme';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function SpeedDialComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=archivo-ficticio'; // Reemplaza con el enlace real
    link.download = 'nombre-del-archivo.ext'; // Reemplaza con el nombre del archivo real
    link.click();
  };
  if (typeof window === 'undefined') {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16, color: 'red' }}
        icon={<SpeedDialIcon  />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={
              action.name === 'Share'
                ? handleOpen
                : action.name === 'Save'
                ? handleDownload
                : null
            }
          />
        ))}
      </SpeedDial>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Compartir contenido
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Aquí puedes compartir tu contenido en redes sociales o copiar el enlace.
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
    </ThemeProvider>
  );
}
