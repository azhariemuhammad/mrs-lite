import React, { useState, useContext } from 'react'

import { useStyles } from './styles'
import { MedicalRecordsContext } from 'context/MedicalRecordsContext'
import CustomTable from '../CustomTable'

const PatientListCard = () => {
	const { mrsHeading, container, paper, patientCardHeader, patientCardItem } = useStyles()
	const [checked, setChecked] = useState(true)
	const [orderBy, setOrderBy] = useState()
	const { dataPatients, handleRegisterPatients } = useContext(MedicalRecordsContext)

	const headCells = [
		{ id: 'medRecNum', numeric: false, disablePadding: true, label: 'No. Rekam Medik' },
		{ id: 'name', numeric: false, disablePadding: false, label: 'Nama' },
		{ id: 'chiefComplaint', numeric: false, disablePadding: false, label: 'Keluhan' },
		{ id: 'gender', numeric: false, disablePadding: false, label: 'Jenis Kelamin' },
		{ id: 'payer', numeric: false, disablePadding: false, label: 'Jaminan' },
		{ id: 'poli', numeric: false, disablePadding: false, label: 'Poli Tujuan' },
	]
	const tableCellsKey = ['medRecoredNumber', 'name', 'chiefComplaint', 'gender', 'payer', 'poli']
	return <CustomTable dataTable={dataPatients} headCells={headCells} tableCellsKey={tableCellsKey} />
}

export default PatientListCard
