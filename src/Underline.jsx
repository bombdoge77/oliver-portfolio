import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import gradient from './theme/gradient.js'

export default function Underline(props) {
	const [time, setTime] = useState(0)
	const [direction, setDirection] = useState(true)
	const increment = 0.2

	useEffect(() => {
		setTimeout(() => {
			if (time < 100 || time > 0) setTime(direction ? time + increment : time - increment)
			else setDirection(!direction)
		}, 3)
	})

	return(
		<Box sx={{
			mt: 0.5,
			mb: 4, 
			pb: 0, 
			height: '8px', 
			width: 0.8, 
			overflow: 'hidden', 
			backgroundImage: gradient.primary,
			backgroundSize: '200%',
			backgroundPosition: `${time}%`
		}}/>
		)
}