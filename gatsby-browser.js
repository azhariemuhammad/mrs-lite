import React from 'react'
import { MedicalRecordsProvider } from 'context/MedicalRecordsContext'
import { PatientsProvider } from 'context/PatientsContext'
import { AuthProvider } from 'context/AuthContext'
import { CookiesProvider } from 'react-cookie'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return (
    <CookiesProvider>
      <AuthProvider>
        <MedicalRecordsProvider>
          <PatientsProvider>{element}</PatientsProvider>
        </MedicalRecordsProvider>
      </AuthProvider>
    </CookiesProvider>
  )
}
