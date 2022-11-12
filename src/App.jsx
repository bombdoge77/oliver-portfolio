import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Project from './Project.jsx'
import SocialBar from './SocialBar.jsx'
import Underline from './Underline.jsx'
import Box from '@mui/material/Box'
import './App.css'
import theme from './theme/theme.js'
import projects from './projects.js'

function App() {
  const [count, setCount] = useState(1)
  const fullHeader = "Hello, I'm Oliver."
  const header = fullHeader.slice(0, count)

  useEffect(() => {
    if (count > fullHeader.length) return

    setTimeout(() => {
      setCount(count + 1)
    }, 100)
  }, [count])

  return (
    <Box className="App" sx={{backgroundColor: theme.palette.background.main, color: theme.palette.text.main}}>

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
  )
}

export default App
