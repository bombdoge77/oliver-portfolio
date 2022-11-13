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
import gradient from './theme/gradient.js';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Canvas } from '@react-three/fiber';
import { useTheme } from '@mui/material';

export default function Project(props) {
	const theme = useTheme()

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
		<Paper elevation={8} sx={{
			maxWidth: '90vh',
			width: 0.75, 
			display: 'flex', 
			justifyContent: 'center',
			mb: 20,
			borderRadius: 1,
			background: gradient.primary,
			backgroundSize: '400%',
			backgroundPosition: `${time}%`,
			transition: 'all ease 200ms',
			'&:hover': {
				transform: 'scale(1.02)'
			}
		}}>

		<Card elevation={0} sx={{
			width: 1, 
			m: '8px',
			p: 4, 
			display: 'flex', 
			flexDirection: 'column', 
			justifyContent: 'center', 
			alignItems: 'center',
			background: theme.palette.background.secondary,
			color: theme.palette.text.main
		}}>

			<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
				<Link href={props.project.link} color='inherit' underline='none'>
					<CardHeader title={<h2>{props.project.title}</h2>} sx={headerStyle}/>
				</Link>

				<Divider flexItem='true' orientation='vertical' variant='middle' sx={{m: 2}}/>

				<Typography>{props.project.language}</Typography>
			</Box>


			<Divider sx={{m: 1, width: 0.8}}/>

			<CardContent>
				{props.project.description}
			</CardContent>

			<CardMedia
        component="img"
        image={props.project.image}
      />

    	<CardContent>
    		{props.media}
    	</CardContent>

			<CardActions sx={{justifyContent: "center"}}>
				<a href={props.project.link}>
					<Button variant='outlined' color='primary' endIcon={<GitHubIcon/>}>
						View on GitHub
					</Button>
				</a>
			</CardActions>
		</Card>
		</Paper>
		)
}