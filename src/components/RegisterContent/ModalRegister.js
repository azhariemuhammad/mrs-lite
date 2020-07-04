import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import FormRegisterPatient from './FormRegisterPatient'

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		minWidth: '400px',
		textAlign: 'center',
		minHeight: '400px',
		height: 'auto',
		width: '500px',
		borderRadius: '8px',
		padding: '32px',
	},
}))

const ModalRegister = ({ handleClose }) => {
	const classes = useStyles()
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<FormRegisterPatient />
					</div>
				</Fade>
			</Modal>
		</div>
	)
}

export default ModalRegister