import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  textInput: props => ({
    fontSize: '0.875rem',
    backgroundColor: '#FFFFFF',
    border: `${props.isError ? '1px solid red' : '1px solid #E5E7E9'}`,
    borderRadius: '8px',
    height: '40px',
    padding: '8px 12px',
    width: '100%'
  })
})
