//import { createTheme } from '@mui/material/styles'
import { lightBlue, pink, grey } from '@mui/material/colors'

const getTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: pink[200],
          },
          secondary: {
            main: lightBlue[300],
          },
          background: {
            main: 'white',
            secondary: 'white',
          },
          text: {
            main: grey[900],
            hover: grey[600],
          }
        }
      : {
          primary: {
            main: pink[200],
          },
          secondary: {
            main: lightBlue[300],
          },
          background: {
            main: grey[900],
            secondary: grey[800],
          },
          text: {
            main: 'white',
            hover: grey[300],
          },
        }
    )
  }
})

/*const darkTheme = createTheme({
  palette: {
    primary: {
      main: pink[200],
    },
    secondary: {
      main: lightBlue[300],
    },
    background: {
      main: grey[900],
      secondary: grey[800],
    },
    text: {
      main: 'white',
      hover: grey[300],
    },
  },
})*/

export default getTheme