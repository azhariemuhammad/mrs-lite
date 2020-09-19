import React from 'react'
import { navigate } from '@reach/router'
import { node, shape } from 'prop-types'
import Layout from 'components/Layout'
import { useAuth } from 'context/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { getToken } = useAuth()
  const { location, pageTitle } = rest
  if (!getToken() && location.pathname !== `/app/login`) {
    navigate('app/login')
    return null
  }
  return (
    <Layout location={location} title={pageTitle}>
      <Component {...rest} />
    </Layout>
  )
}

PrivateRoute.propTypes = {
  component: node.isRequired,
  location: shape({}).isRequired
}
export default PrivateRoute
