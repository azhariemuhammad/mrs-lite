import React, { useState } from 'react'
import { node } from 'prop-types'
import searchPatients from '../helpers/searchPatients'
import { normalizePatient } from '../helpers/normalizePatients'

export const PatientsContext = React.createContext()

export const PatientsProvider = ({ children }) => {
  const [searchedPatient, setSearchPatient] = useState([])
  const handleSearchPatient = async data => {
    const { response, error } = await searchPatients(data)

    if (!error) {
      const normalizedPatient = normalizePatient(response || [])
      setSearchPatient(normalizedPatient)
    }
    return { error, response }
  }
  return (
    <PatientsContext.Provider value={{ handleSearchPatient, searchedPatient }}>
      {children}
    </PatientsContext.Provider>
  )
}

PatientsProvider.propTypes = {
  children: node.isRequired
}

// eslint-disable-next-line react/prop-types
export default ({ element }) => <PatientsProvider>{element}</PatientsProvider>
