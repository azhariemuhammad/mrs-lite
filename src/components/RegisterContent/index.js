import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import FormRegisterPatient from './FormRegisterPatient'

import SearchIcon from '@material-ui/icons/Search'

import { withStyles } from '@material-ui/core/styles'

import { styles } from './styles'

function RegisterContent({ classes }) {
	return (
		<div className={classes.container}>
			<Paper className={classes.paper}>
				<Typography variant="h6" component="h2" className={classes.mrsHeading} gutterBottom>
					Register Pasien
				</Typography>
				<div>
					<div>
						<Toolbar>
							<Grid container spacing={16} alignItems="center">
								<Grid item>
									<SearchIcon className={classes.block} color="inherit" />
								</Grid>
								<Grid item xs>
									<TextField
										fullWidth
										placeholder="Cari dengan ID atau Nama"
										InputProps={{
											disableUnderline: true,
											className: classes.searchInput,
										}}
									/>
								</Grid>
							</Grid>
						</Toolbar>
					</div>
				</div>
				<FormRegisterPatient />
			</Paper>
		</div>
	)
}

RegisterContent.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RegisterContent)
