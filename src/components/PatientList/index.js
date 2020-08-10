import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { useStyles } from './styles'
import PatientListCard from './PatientListCard'

const PatientList = () => {
  const { mrsHeading, container, paper } = useStyles()
  return (
    <div className={container}>
      <Paper className={paper}>
        <Typography
          variant="h6"
          component="h2"
          className={mrsHeading}
          gutterBottom
        >
          Register Pasien
        </Typography>
        <PatientListCard />
      </Paper>
    </div>
  )
}

export default PatientList
