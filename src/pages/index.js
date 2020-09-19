import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'
import { ToasterProvider } from 'context/ToasterContext'

function PerformancePage({ location }) {
  const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
  return (
    <ToasterProvider>
      <Layout location={location} title={pageTitle}>
        <Content />
      </Layout>
    </ToasterProvider>
  )
}
PerformancePage.propTypes = {
  location: PropTypes.shape({ pathname: {} }).isRequired
}
export default PerformancePage
