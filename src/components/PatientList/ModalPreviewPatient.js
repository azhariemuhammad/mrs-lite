import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import PersonIcon from '@material-ui/icons/Person'
import LocalHospital from '@material-ui/icons/LocalHospital'

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		outline: 'none',
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
	dFlex: {
		display: 'flex',
		padding: '8px 8px 12px 8px',
	},
	textContent: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'left',
		marginLeft: '16px',
		lineHeight: '1.6',
	},
	personCircle: {
		padding: '9px 10px',
		border: '1px solid',
		borderRadius: '50%',
	},
}))

const ModalPreviewPatient = ({ handleClose, open }) => {
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
						<Paper style={{ marginBottom: '16px' }} elevation={1}>
							<div style={{ textAlign: 'left', padding: '8px 8px 12px 8px' }}>Informasi Pasien</div>
							<div className={classes.dFlex}>
								<div className={classes.personCircle}>
									<PersonIcon style={{ fontSize: 40 }} color="inherit" />
								</div>
								<div className={classes.textContent}>
									<span>Muhammad Amri A. Azhary</span>
									<span>Pria</span>
									<span>11 Dec 1992</span>
								</div>
							</div>
						</Paper>
						<Paper elevation={1}>
							<div style={{ textAlign: 'left', padding: '8px 8px 12px 8px' }}>Informasi Perawatan</div>
							<div className={classes.textContent}>
								<div>
									<span>Klinik</span>
									<span>Poli Umum</span>
								</div>
								<div>
									<span>Dokter Penanggung Jawab</span>
									<span>dr. Covid 19</span>
								</div>
								<div>
									<span>Jaminan</span>
									<span>BPJS</span>
								</div>
								<div>
									<span>Tanggal Kunjungan</span>
									<span>04 April 2012</span>
								</div>
							</div>
						</Paper>
					</div>
				</Fade>
			</Modal>
		</div>
	)
}

export default ModalPreviewPatient
