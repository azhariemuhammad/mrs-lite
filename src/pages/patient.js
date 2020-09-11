import React from 'react'
import { Router, Redirect } from '@reach/router'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import PatientList from 'components/PatientList'
import Patient from 'components/patient'
import Toaster from 'components/Toaster'

function PatientListPage({ location }) {
  const pageTitle = 'Daftar Pasien'
  return (
    <Layout location={location} title={pageTitle}>
      <Router>
        <PatientList path="/patient" />
        <Patient path="/patient/:id" />
        <Redirect from="/patient" to="/" />
      </Router>
      <Toaster />
    </Layout>
  )
}
PatientListPage.propTypes = {
  location: PropTypes.shape({ pathname: {} }).isRequired
}
export default PatientListPage
