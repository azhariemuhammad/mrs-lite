import React, { useState, useContext } from 'react'

import { useStyles } from './styles'
import { MedicalRecordsContext } from 'context/MedicalRecordsContext'
import Searchbar from 'components/Searchbar'
import CustomTable from '../CustomTable'
import ModalPreviewPatient from './ModalPreviewPatient'

const PatientListCard = () => {
	const { mrsHeading, container, paper, patientCardHeader, patientCardItem } = useStyles()
	const [checked, setChecked] = useState(true)
	const [openModal, setOpenModal] = useState(false)
	const { dataPatients, handleRegisterPatients } = useContext(MedicalRecordsContext)
	console.log({ dataPatients })

	const headCells = [
		{ id: 'medRecNum', numeric: false, disablePadding: true, label: 'No. Rekam Medik' },
		{ id: 'name', numeric: false, disablePadding: false, label: 'Nama' },
		{ id: 'chiefComplaint', numeric: false, disablePadding: false, label: 'Keluhan' },
		{ id: 'gender', numeric: false, disablePadding: false, label: 'Jenis Kelamin' },
		{ id: 'payer', numeric: false, disablePadding: false, label: 'Jaminan' },
		{ id: 'poli', numeric: false, disablePadding: false, label: 'Poli Tujuan' },
		{ id: 'action', numeric: false, disablePadding: false, label: '' },
	]
	const tableCellsKey = ['medRecoredNumber', 'name', 'chiefComplaint', 'gender', 'payer', 'poli']

	const handleSetOpenModal = () => {
		setOpenModal(!openModal)
	}
	return (
		<>
			<CustomTable
				dataTable={dataPatients}
				headCells={headCells}
				tableCellsKey={tableCellsKey}
				action={handleSetOpenModal}
			/>
			<ModalPreviewPatient handleClose={handleSetOpenModal} open={openModal} />
		</>
	)
}

export default PatientListCard
