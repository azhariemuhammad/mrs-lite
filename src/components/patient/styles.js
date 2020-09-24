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
    padding: '18px',
    marginBottom: '24px'
  },
  dflex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  leftContent: {
    'margin-right': '24px',
    width: '450px',
    height: '100%'
  },
  rigthContent: {
    width: '100%',
    'margin-right': '24px'
  },
  wrapperBtn: {
    marginTop: '8px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: '50px',
    border: '0.5px dashed #2ec1ac',
    background: 'white',
    borderRadius: '8px',
    padding: '15px',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 0, 0, 0.04)'
    }
  },
  btn: {
    dispaly: 'block',
    background: '#f0000'
  },
  textTitle: {
    margin: '0',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '0.875rem',
    color: 'rgba(49, 53, 59, 0.68)',
    padding: '8px 0'
  },
  contentVal: {
    margin: '0',
    padding: '8px 0'
  },
  tableWrapper: {
    borderCollapse: 'collapse',
    width: '100%',
    margin: '24px'
  },
  head: {
    textAlign: 'left',
    paddingBottom: '16px'
  },
  wrapperAssesment: {
    display: 'flex',
    width: '80%'
  },
  btnAssesment: {
    height: '40px',
    marginLeft: '12px'
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
