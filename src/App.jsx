import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Project from './Project.jsx'
import SocialBar from './SocialBar.jsx'
import Underline from './Underline.jsx'
import Box from '@mui/material/Box'
import './App.css'
import getTheme from './theme/theme.js'
import projects from './projects.js'
import LayeredSphere from './LayeredSphere.jsx'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material'
import Fab from '@mui/material/Fab'
import ModeNightSharpIcon from '@mui/icons-material/ModeNightSharp';

function App() {
  const [mode, setMode] = useState('light')
  const toggleDarkMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const [count, setCount] = useState(1)
  const fullHeader = "Hello, I'm Oliver."
  const header = fullHeader.slice(0, count)

  const theme = createTheme(getTheme(mode))

  useEffect(() => {
    if (count > fullHeader.length) return

    setTimeout(() => {
      setCount(count + 1)
    }, 100)
  }, [count])

  return (
    <ThemeProvider theme={theme}>

    <Box 
    className="App" 
    sx={{
      backgroundColor: theme.palette.background.main, 
      color: theme.palette.text.main
    }}>

    <Fab 
    onClick={toggleDarkMode}
    sx={{  
      color: theme.palette.text.main,
      backgroundColor: theme.palette.background.secondary,
      bottom: '5vh',
      right: '5vh',
      position: 'fixed'
    }}>
      <ModeNightSharpIcon />
    </Fab>

      <div className="title">
        <Box sx={{display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'}}
        >

          <h1>{header}</h1>
          <Underline/>

        </Box>
        <SocialBar/>
      </div>

      <h1>Projects</h1>

      <div className="projects">

          <Project 
          project={projects.dist}
          gradientStart={true}
          />

          <Project 
          project={projects.busplus}
          gradientStart={false}
          />

          <Project 
          project={projects.portfolio}
          gradientStart={true}
          />

      </div>
    </Box>

    </ThemeProvider>
  )
}

export default App
