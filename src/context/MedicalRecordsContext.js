import React, { useState, useEffect } from 'react'
import { node } from 'prop-types'

import { useAuth } from 'context/AuthContext'
import useFetch from '../hooks/useFetch'
import { normalizedStaffProviders } from '../helpers/normalizedStaffProviders'
import fetchRequest from '../helpers/fetchRequest'

export const MedicalRecordsContext = React.createContext()

export const MedicalRecordsProvider = ({ children }) => {
  const { getToken } = useAuth()
  const { response: responseDepartment, error: errorDepartment } = useFetch(
    'departments',
    'GET',
    {}
  )
  const { response: responseStaff, error: errorStaff } = useFetch(
    'staff-providers',
    'GET',
    {}
  )

  const [departments, setDepartments] = useState([])
  const [staffProviders, setStaffProviders] = useState([])
  useEffect(() => {
    if (!errorDepartment && responseDepartment) {
      setDepartments(responseDepartment)
    }

    if (!errorStaff && responseStaff) {
      setStaffProviders(normalizedStaffProviders(responseStaff) || [])
    }
  }, [responseDepartment, responseStaff, errorStaff, errorDepartment])

  const handleRegisterPatients = data => {
    const body = JSON.stringify(data)
    const res = fetchRequest(body, 'patients', 'POST', getToken())
    return res
  }

  const handleCreateVisits = data => {
    const body = JSON.stringify(data)
    const res = fetchRequest(body, 'visits', 'POST', getToken())
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
