import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    height: 'auto',
    padding: '24px 24px 24px',
    background: 'rgb(243, 244, 245)',
    display: 'flex'
  },
  paper: {
    padding: '32px'
  },
  dflex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  leftContent: {
    'margin-right': '24px',
    width: '400px',
    height: '100%'
  },
  rigthContent: {
    width: '100%',
    'margin-right': '24px'
  }
})
