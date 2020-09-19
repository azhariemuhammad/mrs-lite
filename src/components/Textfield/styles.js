import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  textInput: props => ({
    fontSize: '0.875rem',
    backgroundColor: '#FFFFFF',
    border: `${props.isError ? '1px solid red' : '1px solid #E5E7E9'}`,
    borderRadius: '8px',
    height: '40px',
    padding: '8px 12px',
    width: `${props.width ? props.width : '100%'}`
  }),
  flex: {
    display: 'flex',
    margin: '0 0 16px 0',
    justifyContent: 'space-between'
  },
  label: {
    width: '180px',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.85rem',
    fontWeight: 600,
    lineHeight: '20px'
  }
})
