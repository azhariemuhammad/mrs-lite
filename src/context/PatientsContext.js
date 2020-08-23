import React, { useState } from 'react'
import { node } from 'prop-types'
import searchPatients from '../helpers/searchPatients'
import { normalizePatient } from '../helpers/normalizePatients'

export const PatientsContext = React.createContext()

export const PatientsProvider = ({ children }) => {
  const [searchedPatient, setSearchPatient] = useState([])
  const handleSearchPatient = async data => {
    const res = await searchPatients(data)

    if (res.ok) {
      const normalizedPatient = normalizePatient(res.json || [])
      setSearchPatient(normalizedPatient)
      return { error: false }
    }
    return { error: 'Mohon coba lagi!' }
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
