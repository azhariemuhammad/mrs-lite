import React, { useState, useContext } from 'react'

import { MedicalRecordsContext } from 'context/MedicalRecordsContext'

import CustomTable from 'components/CustomTable'

const PatientList = () => {
  const [openModal, setOpenModal] = useState(false)
  const { visits } = useContext(MedicalRecordsContext)

  const headCells = [
    {
      id: 'mrNum',
      numeric: false,
      disablePadding: true,
      label: 'No. Rekam Medik'
    },
    { id: 'fname', numeric: false, disablePadding: false, label: 'Nama Depan' },
    {
      id: 'lname',
      numeric: false,
      disablePadding: false,
      label: 'Nama Belakang'
    },
    {
      id: 'gender',
      numeric: false,
      disablePadding: false,
      label: 'Jenis Kelamin'
    },
    {
      id: 'dob',
      numeric: false,
      disablePadding: false,
      label: 'Tanngal Lahir'
    },
    {
      id: 'phone',
      numeric: false,
      disablePadding: false,
      label: 'No. Hp'
    },
    { id: 'action', numeric: false, disablePadding: false, label: '' }
  ]
  const tableCellsKey = [
    'medRecoredNumber',
    'name',
    'chiefComplaint',
    'gender',
    'payer',
    'poli'
  ]

  const handleSetOpenModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
      <CustomTable
        dataTable={visits}
        headCells={headCells}
        tableCellsKey={tableCellsKey}
        action={handleSetOpenModal}
        withToolbar={false}
      />
    </>
  )
}

export default PatientList
