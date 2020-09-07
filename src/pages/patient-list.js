import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import PatientList from 'components/PatientList'
import Toaster from 'components/Toaster'

function PatientListPage({ location }) {
  const pageTitle = 'Daftar Pasien'
  return (
    <Layout location={location} title={pageTitle}>
      <PatientList />
      <Toaster />
    </Layout>
  )
}
PatientListPage.propTypes = {
  location: PropTypes.shape({ pathname: {} }).isRequired
}
export default PatientListPage
