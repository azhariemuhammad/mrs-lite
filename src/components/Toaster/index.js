import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import ToasterContext from '../../context/ToasterContext'

const Toaster = () => {
  const { _toasterProps } = useContext(ToasterContext)
  const {
    text,
    onActionClick,
    display,
    shownDuration,
    actionText
  } = _toasterProps

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={display}
      autoHideDuration={shownDuration}
      onClick={onActionClick}
      message={text}
      action={
        <>
          <Button color="secondary" size="small" onClick={onActionClick}>
            {actionText}
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onActionClick}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    />
  )
}

export default Toaster
