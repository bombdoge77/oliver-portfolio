import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import theme from './theme/theme.js';
import gradient from './theme/gradient.js';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function Project(props) {
	const headerStyle = {
		'&:hover': {
			color: theme.palette.text.hover,
			cursor: 'pointer'
		}
	}
	const [time, setTime] = useState(props.gradientStart ? 0 : 50)
	const [direction, setDirection] = useState(true)
	const increment = 0.4

	useEffect(() => {
		setTimeout(() => {
			if (time < 100 || time > 0) setTime(direction ? time + increment : time - increment)
			else setDirection(!direction)
		}, 2)
	})

	return (
		<Box sx={{
			width: 0.5, 
			display: 'flex', 
			justifyContent: 'center',
			mb: 20,
			borderRadius: 1,
			background: gradient.primary,
			backgroundSize: '400%',
			backgroundPosition: `${time}%`
		}}>

		<Card elevation={3} sx={{
			width: 1, 
			m: '8px',
			p: 4, 
			display: 'flex', 
			flexDirection: 'column', 
			justifyContent: 'center', 
			alignItems: 'center'
		}}>

			<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
				<Link href={props.link} color='inherit' underline='none'>
					<CardHeader title={<h2>{props.header}</h2>} sx={headerStyle}/>
				</Link>

				<Divider flexItem='true' orientation='vertical' variant='middle' sx={{m: 2}}/>

				<Typography>C++{props.language}</Typography>
			</Box>


			<Divider variant="middle" sx={{m: 1, width: 0.8}}/>

			<CardContent>
				{props.children}
			</CardContent>

			<CardMedia
        component="img"
        image={props.image}
      />

			<CardActions sx={{justifyContent: "center"}}>
				<a href={props.link}>
					<Button variant='outlined' color='primary' endIcon={<GitHubIcon/>}>
						View on GitHub
					</Button>
				</a>
			</CardActions>
		</Card>
		</Box>
		)
}