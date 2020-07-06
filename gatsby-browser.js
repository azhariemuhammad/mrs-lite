import React from 'react'
import { MedicalRecordsProvider } from './src/context/MedicalRecordsContext'

export const wrapRootElement = ({ element }) => {
	return <MedicalRecordsProvider>{element}</MedicalRecordsProvider>
}
