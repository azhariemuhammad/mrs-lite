import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  select: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    height: '40px',
    fontSize: '14px',
    lineHeight: '40px',
    backgroundColor: 'rgb(255, 255, 255)',
    textAlign: 'left',
    padding: '0px 8px 0px 16px',
    border: '1px solid rgb(229, 231, 233)',
    borderRadius: '8px',
    transition: 'border-radius 280ms ease 0s'
  },
  flex: {
    display: 'flex',
    margin: '0 0 16px 0',
    justifyContent: 'space-between'
  },
  leftSide: {
    width: '180px',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.85rem',
    fontWeight: 600,
    lineHeight: '20px'
  },
  placeholder: {
    color: 'rgb(229, 231, 233)'
  }
})
