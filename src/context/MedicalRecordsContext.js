import React, { useState, useEffect } from 'react'
import { node } from 'prop-types'

import useFetch from '../hooks/useFetch'
import { normalizedStaffProviders } from '../helpers/normalizedStaffProviders'
import fetchRequest from '../helpers/fetchRequest'

export const MedicalRecordsContext = React.createContext()

export const MedicalRecordsProvider = ({ children }) => {
  const responseDepartment = useFetch('departments', 'GET', {})
  const responseStaff = useFetch('staff-providers', 'GET', {})

  const [departments, setDepartments] = useState([])
  const [staffProviders, setStaffProviders] = useState([])
  useEffect(() => {
    if (responseDepartment) {
      setDepartments(responseDepartment)
    }
    if (responseStaff) {
      setStaffProviders(normalizedStaffProviders(responseStaff) || [])
    }
  }, [responseDepartment, responseStaff])

  const handleRegisterPatients = data => {
    const body = JSON.stringify(data)
    const res = fetchRequest(body, 'patients', 'POST')
    return res
  }

  const handleCreateVisits = data => {
    const body = JSON.stringify(data)
    const res = fetchRequest(body, 'visits', 'POST')
    return res
  }

  return (
    <MedicalRecordsContext.Provider
      value={{
        departments,
        staffProviders,
        handleRegisterPatients,
        handleCreateVisits
      }}
    >
      {children}
    </MedicalRecordsContext.Provider>
  )
}

MedicalRecordsProvider.propTypes = {
  children: node.isRequired
}

// eslint-disable-next-line react/prop-types
export default ({ element }) => (
  <MedicalRecordsProvider>{element}</MedicalRecordsProvider>
)
