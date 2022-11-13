import getTheme from './theme.js'

const theme = getTheme('light')

export default {
	primary: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`
}