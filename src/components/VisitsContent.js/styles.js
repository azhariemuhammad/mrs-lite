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
  }
})

export const useVisitStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '32px'
  },
  actionWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: '24px'
  },
  actionBtn: {
    marginRight: '16px'
  },
  wrapperVisits: {
    margin: '16px 0 32px 0'
  }
})
