import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'

function VitalsPage({ location }) {
  const pageTitle = 'Pemeriksaan Vital pasien'
  return (
    <Layout location={location} title={pageTitle}>
      <div style={{ margin: '0 auto;', width: '100%;' }}>On Progress</div>
    </Layout>
  )
}
VitalsPage.propTypes = {
  location: PropTypes.shape({ pathname: {} }).isRequired
}
export default VitalsPage
