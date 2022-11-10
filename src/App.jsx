import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Project from './Project.jsx'
import SocialBar from './SocialBar.jsx'
import Underline from './Underline.jsx'
import Box from '@mui/material/Box'
import './App.css'
import theme from './theme/theme.js'

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
        <Project header="Big Dist Energy" link="https://github.com/bombdoge77" gradientStart={true}>
          Distortion VST plugin written using the JUCE C++ framework. Since music production is one of my hobbies it came quite naturally to make my own version of one of the most common audio effects; distortion. The plugin can be used inside a digital audio workstation or as a standalone application to distort an input audio buffer. Different distortion algorithms such as soft clip and sine foldover can be used in the application.
        </Project>

        <Project header="Bus+" link="https://github.com/bombdoge77" gradientStart={false}>
          A web application for viewing live positions of buses in Uppsala, Sweden. The application displays bus positions on top of a map using the Google Maps React API. Bus positions are provided by the Trafiklab API and are served to the client using websockets from an API built in Rust. I worked primarily with React in the frontend, building the UI and fetching data from the API.
        </Project>

        <Project header="Project" link="https://github.com/bombdoge77" gradientStart={true}>
          this is the description
        </Project>
      </div>
    </Box>
  )
}

export default App
