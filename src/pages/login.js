import React from 'react'
import PropTypes from 'prop-types'
import LoginContent from 'components/LoginContent'
import { AuthProvider } from 'context/AuthContext'

function LoginPage({ location }) {
  // const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
  return (
    <AuthProvider>
      <LoginContent />
    </AuthProvider>
  )
}
LoginPage.propTypes = {
  location: PropTypes.shape({ pathname: {} }).isRequired
}
export default LoginPage
