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
  },
  chip: {
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgb(229, 231, 233)',
    color: 'rgba(49, 53, 59, 0.68)',
    verticalAlign: 'top',
    flex: '1 1 0%',
    flexWrap: 'nowrap',
    lineHeight: '16px',
    overflow: 'hidden',
    padding: '0px 12px',
    textOverflow: 'ellipsis',
    transition: 'all 0.28s ease-in-out 0s',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    borderRadius: '8px',
    fontSize: '0.857143rem',
    fontWeight: 800,
    margin: '0px',
    width: '100px',
    height: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    margiNRight: '0'
  },
  dropdown: {
    position: 'relative'
  },
  dropdownItemWrapper: {
    position: 'absolute',
    borderRadius: '8px',
    backgroundColor: 'rgb(255, 255, 255)',
    transition: 'opacity 0.2s ease 0s',
    visibility: 'visible',
    opacity: 1,
    border: 'thin solid rgb(229, 231, 233)',
    minWidth: '150px'
  },
  dropdownItem: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    fontWeight: 'normal',
    fontSize: `${12 / 16}rem`,
    color: 'inherit',
    '&:hover': {
      backgroundColor: '#f8f8f8'
    },
    '&:after': {
      content: '',
      width: '2px',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0
    }
  }
})
