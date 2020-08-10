import React, { useState, memo, useEffect, useCallback } from 'react'
import { string, func, bool, shape } from 'prop-types'
import TextField from '@material-ui/core/TextField'

import useDebounce from '../../hooks/useDebounce'

const Textfield = ({
  defaultValue,
  handler,
  fullWidth,
  InputProps,
  id,
  type,
  inputName,
  errorText,
  required,
  error
}) => {
  const [text, setText] = useState(defaultValue)

  const handleOnChange = e => {
    const val = e.target.value
    setText(val)
  }

  const cb = useCallback(() => {
    handler(text, inputName)
  }, [text, inputName])

  const debouncedText = useDebounce(cb, 200)

  useEffect(() => {
    if (debouncedText) {
      cb()
    }
  }, [debouncedText])

  return (
    <TextField
      type={type}
      value={text}
      error={error}
      required={required}
      helperText={errorText}
      fullWidth={fullWidth}
      onChange={handleOnChange}
      InputProps={InputProps}
      name={inputName}
    />
  )
}

Textfield.defaultProps = {
  defaultValue: '',
  fullWidth: true,
  id: '',
  InputProps: {},
  type: string
}
Textfield.propTypes = {
  defaultValue: string,
  fullWidth: bool,
  handler: func.isRequired,
  id: string,
  inputName: string.isRequired,
  InputProps: shape({}),
  type: string
}

export default memo(Textfield)
