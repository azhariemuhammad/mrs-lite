import React, { memo } from 'react'
import { Controller } from 'react-hook-form'
import { string, bool, shape } from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { useStyles } from './styles'

const Textfield = ({
  defaultValue,
  fullWidth,
  type,
  inputName,
  control,
  errors,
  required,
  label,
  width,
  inputProps,
  className
}) => {
  const error = errors?.[inputName]
  const isError = typeof error !== 'undefined'
  const classes = useStyles({ isError, width })
  return (
    <div className={`${classes.flex} ${className}`}>
      <div className={classes.label}>{label}</div>
      <Controller
        control={control}
        name={inputName}
        as={
          <TextField
            fullWidth={fullWidth}
            type={type}
            InputProps={{
              disableUnderline: true,
              className: classes.textInput,
              ...inputProps
            }}
            error={isError}
            helperText={error?.message}
          />
        }
        rules={{
          ...(required && { required: 'Field tidak boleh kosong' })
        }}
        defaultValue={defaultValue}
      />
    </div>
  )
}

Textfield.defaultProps = {
  className: '',
  defaultValue: '',
  fullWidth: true,
  required: false,
  type: 'text',
  inputProps: {},
  width: ''
}
Textfield.propTypes = {
  className: string,
  control: shape({}).isRequired,
  defaultValue: string,
  errors: shape({}).isRequired,
  fullWidth: bool,
  inputProps: shape({}),
  inputName: string.isRequired,
  label: string.isRequired,
  required: bool,
  type: string,
  width: string
}

export default memo(Textfield)
