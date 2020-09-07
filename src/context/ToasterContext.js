import React, { useState, useEffect, useCallback } from 'react'
import { node } from 'prop-types'

const ToasterContext = React.createContext()
const defaultState = {
  text: '',
  actionText: '',
  onActionClick: () => {},
  error: false,
  display: false,
  shownDuration: 3500
}

export const ToasterProvider = ({ children }) => {
  const [state, setState] = useState({ ...defaultState })

  const showToaster = useCallback(
    /**
     * Function to show a toaster.
     * @param {string} text Text inside the toaster body
     * @param {string} actionText CTA text of the toaster
     * @param {Function} onActionClick Callback when CTA text is clicked
     * @param {boolean} error Whether to use error styling or not
     * @param {number} shownDuration How many milliseconds before auto-hiding toaster. If set to 0, toaster will not be auto-hidden
     */
    ({
      text = '',
      actionText = '',
      onActionClick = () => {},
      error = false,
      shownDuration = 3500
    }) => {
      setState({
        text,
        actionText,
        onActionClick,
        error,
        shownDuration,
        display: true
      })
    },
    []
  )

  const hideToaster = useCallback(
    /**
     * Function to hide a toaster.
     */
    () => {
      setState(prevState => ({
        ...prevState,
        shownDuration: 0,
        display: false
      }))
    },
    []
  )

  useEffect(() => {
    let timeout

    if (state.shownDuration) {
      setTimeout(hideToaster, state.shownDuration)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [state.shownDuration, hideToaster])

  const _toasterProps = {
    text: state.text,
    actionText: state.actionText,
    onActionClick: state.onActionClick,
    error: state.error,
    display: state.display
  }

  return (
    <ToasterContext.Provider
      value={{ showToaster, hideToaster, _toasterProps }}
    >
      {children}
    </ToasterContext.Provider>
  )
}

ToasterProvider.propTypes = {
  children: node.isRequired
}

export default ToasterContext
