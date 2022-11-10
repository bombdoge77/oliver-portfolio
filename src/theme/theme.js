import { createTheme } from '@mui/material/styles'
import { lightBlue, pink, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[200],
    },
    secondary: {
      main: lightBlue[300],
    },
    background: {
      main: 'white',
    },
    text: {
      main: grey[900],
      hover: grey[600],
    },
  },
});

export default theme