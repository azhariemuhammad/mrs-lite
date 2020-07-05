import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { string } from 'prop-types'

import { ToasterContext } from '../../context/ToasterContext'

const Toaster = ({ message }) => {
	const { open, setOpen } = useContext(ToasterContext)

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			open={open}
			autoHideDuration={6000}
			onClick={() => setOpen(false)}
			message={message}
			action={
				<React.Fragment>
					<Button color="secondary" size="small" onClick={() => setOpen(false)}>
						UNDO
					</Button>
					<IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpen(false)}>
						<CloseIcon fontSize="small" />
					</IconButton>
				</React.Fragment>
			}
		/>
	)
}

Toaster.propTypes = {
	message: string.isRequired,
}
export default Toaster
