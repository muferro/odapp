import { createTheme } from '@mui/material/styles';

const azulPrimario = '#4dbce9';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }
          }
        }
      },
    palette: {
      primary: {
        main: azulPrimario,
      },
      secundary: {
        main: '#000',
      },
    },
  });
  
  export default theme;
