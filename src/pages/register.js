import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import RegisterContent from 'components/RegisterContent'
import Toaster from 'components/Toaster'

function RegisterPage({ location }) {
  const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
  return (
    <Layout location={location} title={pageTitle}>
      <RegisterContent />
      <Toaster />
    </Layout>
  )
}
RegisterPage.propTypes = {
  location: PropTypes.shape({ pathname: {} }).isRequired
}
export default RegisterPage
