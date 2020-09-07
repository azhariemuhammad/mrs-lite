import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import VisitsContent from 'components/VisitsContent.js'
import Toaster from 'components/Toaster'

function VisitsPage({ location }) {
  const pageTitle = 'Tambah Pasien'
  return (
    <Layout location={location} title={pageTitle}>
      <VisitsContent />
      <Toaster />
    </Layout>
  )
}
VisitsPage.propTypes = {
  location: PropTypes.shape({ pathname: {} }).isRequired
}
export default VisitsPage
