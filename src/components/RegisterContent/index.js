import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import FormRegisterPatient from './FormRegisterPatient'

import { styles } from './styles'

function RegisterContent({ classes }) {
  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Typography
          variant="h6"
          component="h2"
          className={classes.mrsHeading}
          gutterBottom
        >
          Tambah Pasien Baru
        </Typography>
        <FormRegisterPatient />
      </Paper>
    </div>
  )
}

RegisterContent.propTypes = {
  classes: PropTypes.shape({
    block: {},
    searchInput: {},
    mrsHeading: {},
    container: {},
    paper: {}
  }).isRequired
}

export default withStyles(styles)(RegisterContent)
