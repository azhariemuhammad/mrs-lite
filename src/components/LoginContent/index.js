import React, { useState } from 'react'
import { navigate } from '@reach/router'
import { useForm } from 'react-hook-form'
import Textfield from 'components/Textfield'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import Typography from '@material-ui/core/Typography'
import { useAuth } from 'context/AuthContext'
import BgIllustration from './BgIllustration'
import { useStyles } from './styles'

const LoginContent = () => {
  const classes = useStyles()
  const { login } = useAuth()
  const { handleSubmit, errors, control } = useForm()
  const [onSubmitLoading, setOnSubmitLoading] = useState(false)
  const handleLogin = async data => {
    setOnSubmitLoading(true)

    const { error } = await login(data)
    if (!error) {
      navigate('/patient')
    }
    setOnSubmitLoading(false)
  }
  return (
    <div className={classes.outter__box}>
      <form
        className={classes.container__login}
        onSubmit={handleSubmit(handleLogin)}
      >
        <Typography variant="h4" component="h4" align="center" gutterBottom>
          Puskesmas Namlea
        </Typography>
        <Card className={classes.root}>
          <CardContent>
            <Textfield
              label="Email"
              defaultValue=""
              fullWidth
              inputName="identifier"
              required
              type="email"
              errors={errors}
              control={control}
              className={classes.loginInput}
            />
            <Textfield
              label="Password"
              defaultValue=""
              fullWidth
              inputName="password"
              required
              type="password"
              errors={errors}
              control={control}
              className={classes.loginInput}
            />
          </CardContent>
          <CardActions>
            <input
              type="submit"
              value={onSubmitLoading ? 'Loading...' : 'Login'}
              className={classes.btnLogin}
              disabled={onSubmitLoading}
            />
          </CardActions>
        </Card>
      </form>
      <BgIllustration className={classes.bgImg} />
    </div>
  )
}

export default LoginContent
