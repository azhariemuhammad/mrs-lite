import React, { useState, useEffect } from 'react'
import { node } from 'prop-types'

import useFetch from 'hooks/useFetch'
import { normalizedVisits } from '../helpers/normalizedVisits'
import { normalizedStaffProviders } from '../helpers/normalizedStaffProviders'
import postRequest from '../helpers/postRequest'

export const PatientContext = React.createContext()

export const MedicalRecordsProvider = ({ children }) => {
  const responseVisits = useFetch('all-visits', 'GET', {})
  const responseDepartment = useFetch('departments', 'GET', {})
  const responseStaff = useFetch('staff-providers', 'GET', {})
  const [visits, setListPatient] = useState([])
  const [departments, setDepartments] = useState([])
  const [staffProviders, setStaffProviders] = useState([])
  useEffect(() => {
    if (responseVisits) {
      setListPatient(normalizedVisits(responseVisits || []))
    }
    if (responseDepartment) {
      setDepartments(responseDepartment)
    }
    if (responseStaff) {
      setStaffProviders(normalizedStaffProviders(responseStaff) || [])
    }
  }, [responseVisits, responseDepartment, responseStaff])

  const handleRegisterPatients = data => {
    const body = JSON.stringify(data)
    const res = postRequest(body, 'patients')
    return res
  }

  const handleCreateVisits = data => {
    const body = JSON.stringify(data)
    const res = postRequest(body, 'visits')
    return res
  }
  return (
    <PatientContext.Provider
      value={{
        visits,
        departments,
        staffProviders,
        handleRegisterPatients,
        handleCreateVisits
      }}
    >
      {children}
    </PatientContext.Provider>
  )
}

MedicalRecordsProvider.propTypes = {
  children: node.isRequired
}

// eslint-disable-next-line react/prop-types
export default ({ element }) => (
  <MedicalRecordsProvider>{element}</MedicalRecordsProvider>
)
