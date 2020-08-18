import React from 'react'
import { MedicalRecordsProvider } from 'context/MedicalRecordsContext'
import { PatientsProvider } from 'context/PatientsContext'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return (
    <MedicalRecordsProvider>
      <PatientsProvider>{element}</PatientsProvider>
    </MedicalRecordsProvider>
  )
}
