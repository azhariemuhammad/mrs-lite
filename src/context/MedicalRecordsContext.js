import React, { useState } from 'react'
import { node } from 'prop-types'

import mockData from '../data/data.json'

export const MedicalRecordsContext = React.createContext()

export const MedicalRecordsProvider = ({ children }) => {
	const initialData = mockData?.data?.result
	const [dataPatients, setListPatient] = useState(initialData)

	const handleRegisterPatients = data => {
		setListPatient([...dataPatients, data])
	}
	return (
		<MedicalRecordsContext.Provider value={{ dataPatients, handleRegisterPatients }}>
			{children}
		</MedicalRecordsContext.Provider>
	)
}

MedicalRecordsProvider.propTypes = {
	children: node.isRequired,
}
