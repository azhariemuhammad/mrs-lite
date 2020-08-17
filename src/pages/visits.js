import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import VisitsContent from 'components/VisitsContent.js'

function VisitsPage({ location }) {
  const pageTitle = 'Tambah Pasien'
  return (
    <Layout location={location} title={pageTitle}>
      <VisitsContent />
    </Layout>
  )
}
VisitsPage.propTypes = {
  location: PropTypes.shape({ pathname: {} }).isRequired
}
export default VisitsPage
