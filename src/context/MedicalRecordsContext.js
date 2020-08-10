import React, { useState, useEffect } from 'react'
import { node } from 'prop-types'

import useFetch from '../hooks/useFetch'
import { normalizedVisits } from '../helpers/normalizedVisits'

export const MedicalRecordsContext = React.createContext()

export const MedicalRecordsProvider = ({ children }) => {
  const responseVisits = useFetch('all-visits', 'GET', {})
  const responseDepartment = useFetch('departments', 'GET', {})
  const [visits, setListPatient] = useState([])
  const [departments, setDepartments] = useState([])
  useEffect(() => {
    if (responseVisits) {
      setListPatient(normalizedVisits(responseVisits || []))
    }
    if (responseDepartment) {
      setDepartments(responseDepartment)
    }
  }, [responseVisits, responseDepartment])
  console.log({ visits, responseDepartment, departments })

  const handleRegisterPatients = data => {
    // setListPatient([...visits, data])
    return
  }
  return (
    <MedicalRecordsContext.Provider
      value={{ visits, departments, handleRegisterPatients }}
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
