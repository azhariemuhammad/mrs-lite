import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  loader: {
    width: '26px',
    height: '26px',
    borderWidth: '4px 4px 4px',
    borderStyle: 'solid solid solid',
    borderColor: 'rgb(243, 243, 243) rgb(243, 243, 243) rgb(243, 243, 243)',
    borderImage: 'initial',
    borderRadius: '50%',
    animation: `$spin 2s linear infinite`,
    borderTop: '4px solid rgb(85, 85, 85) !important'
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  }
})
