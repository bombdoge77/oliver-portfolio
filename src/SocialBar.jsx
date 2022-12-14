import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

export default function SocialBar(props) {
	const theme = useTheme()

	const buttonStyle = {
		color: theme.palette.text.main,
		transition: 'all ease 30ms',
		'&:hover': {
			transform: 'scale(1.15)'
		}
	}

	return(
		<Box>
			<IconButton href="https://github.com/bombdoge77">
				<GitHubIcon sx={buttonStyle}/>
			</IconButton>

			<IconButton href="https://www.linkedin.com/in/oliver-kiss-78380a208/">
				<LinkedInIcon sx={buttonStyle}/>
			</IconButton>

			<IconButton href="mailto:oliver.robert1999@gmail.com">
				<MailIcon sx={buttonStyle}/>
			</IconButton>
		</Box>
		)
}