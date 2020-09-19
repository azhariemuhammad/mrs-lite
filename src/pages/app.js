import React from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types'

import PatientList from 'components/PatientList'
import Patient from 'components/patient'
import PrivateRoute from 'components/PrivateRoute'
import RegisterContent from 'components/RegisterContent'
import VisitsContent from 'components/VisitsContent.js'
import { AuthProvider } from 'context/AuthContext'
import { ToasterProvider } from 'context/ToasterContext'

function App({ location }) {
  return (
    <>
      <AuthProvider>
        <ToasterProvider>
          <Router>
            <PrivateRoute component={PatientList} exact path="/app/patient" />
            <PrivateRoute
              component={Patient}
              exact
              path="/app/patient-info/:id"
            />
            <PrivateRoute component={RegisterContent} path="/app/register" />
            <PrivateRoute component={VisitsContent} path="/app/visits" />
          </Router>
        </ToasterProvider>
      </AuthProvider>
    </>
  )
}
App.propTypes = {
  location: PropTypes.shape({ pathname: {} }).isRequired
}
export default App
