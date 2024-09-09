
import Button from '@mui/material/Button';

const MaterialButton = () => {
  if (typeof window === 'undefined') {
    return null;  // Esto asegura que Material UI no se renderice en el lado del servidor
  }

  return <Button variant="contained">Hello, Material UI!</Button>;
};

export default MaterialButton;
