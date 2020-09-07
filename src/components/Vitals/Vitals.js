import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import PatientListCard from 'components/PatientList/PatientListCard'
import { useStyles } from './styles'

const Vitals = () => {
  const { containerVitals, paper, mrsHeading } = useStyles()
  return (
    <div className={containerVitals}>
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

export default Vitals
