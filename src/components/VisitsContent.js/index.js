import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'
import VisitsForm from './VisitsForm'
import PatientList from './PatientList'

function VisitsContent() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Typography
          variant="h6"
          component="h2"
          className={classes.mrsHeading}
          gutterBottom
        >
          Register Pasien Lama
        </Typography>
        <VisitsForm />
        <PatientList />
      </Paper>
    </div>
  )
}

VisitsContent.propTypes = {
  classes: PropTypes.shape({
    block: {},
    searchInput: {},
    mrsHeading: {},
    container: {},
    paper: {}
  }).isRequired
}

export default VisitsContent
