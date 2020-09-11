import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  paper: {
    padding: '32px'
  },
  container: {
    minHeight: '100vh',
    height: 'auto',
    padding: '24px 24px 24px',
    background: 'rgb(243, 244, 245)'
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  searchInput: {
    fontSize: '1rem',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7E9',
    borderRadius: '8px',
    height: '100%',
    padding: '7px 16px',
    width: '80%'
  },
  block: {
    display: 'block'
  },
  mrsHeading: {
    display: 'block',
    fontWeight: 800,
    fontSize: '1.14286rem',
    lineHeight: '22px',
    color: 'rgba(49, 53, 59, 0.96)',
    marginBottom: '16px'
  },
  patientCardHeader: {
    display: 'flex'
  },
  patientCardItem: {
    display: 'flex'
  }
})

export const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main
          //   backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: '1 1 100%'
  }
}))
