import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    minWidth: 368,
    padding: '24px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  outter__box: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '816px',
    position: 'relative'
  },
  container__login: {
    display: 'block',
    width: '368px',
    margin: '0 auto',
    padding: '40px 32px 12px',
    backgroundColor: '#fff'
  },
  btnLogin: {
    position: 'relative',
    borderRadius: '8px',
    fontWeight: 600,
    outline: 0,
    fontSize: '13px',
    height: '40px',
    lineHeight: '24px',
    border: '1px solid #e5e5e5',
    width: '100%',
    alignItems: 'center',
    margin: '0 16px',
    display: 'block',
    padding: '8px',
    color: 'white',
    backgroundColor: 'rgb(0, 95, 234)',
    textTransform: 'uppercase',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      color: 'rgba(0,0,0,.54)'
    }
  },
  bgImg: {
    position: 'absolute',
    top: 0,
    right: '-107px',
    zIndex: -1,
    height: '500px'
  },
  loginInput: {
    flexDirection: 'column',
    '.MuiTextField-root': {
      paddingTop: '8px !important'
    }
  }
})
