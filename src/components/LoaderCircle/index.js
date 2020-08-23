import React from 'react'
import { useStyles } from './styles'

const LoaderCircle = () => {
  const classes = useStyles()
  return <div className={classes.loader} />
}

export default LoaderCircle
