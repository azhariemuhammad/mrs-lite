import React, { useState, useContext } from 'react'

import { PatientsContext } from 'context/PatientsContext'

import CustomTable from 'components/CustomTable'
import ModalCreateVisit from './ModalCreateVisit'

const PatientList = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState({})
  const { searchedPatient } = useContext(PatientsContext)
  console.log({ searchedPatient })

  const headCells = [
    {
      id: 'medRecNum',
      numeric: false,
      disablePadding: true,
      label: 'No. Rekam Medik'
    },
    { id: 'name', numeric: false, disablePadding: false, label: 'Nama' },
    {
      id: 'dob',
      numeric: false,
      disablePadding: false,
      label: 'Tanggal Lahir'
    },
    {
      id: 'gender',
      numeric: false,
      disablePadding: false,
      label: 'Jenis Kelamin'
    },
    {
      id: 'address',
      numeric: false,
      disablePadding: false,
      label: 'Alamat'
    },
    { id: 'action', numeric: false, disablePadding: false, label: '' }
  ]
  const tableCellsKey = ['medRecoredNumber', 'name', 'dob', 'gender', 'address']

  const handleSetOpenModal = () => {
    setOpenModal(!openModal)
  }
  const handleOnClick = e => {
    setSelectedPatient(e)
    handleSetOpenModal()
  }
  return (
    <>
      <CustomTable
        dataTable={searchedPatient}
        headCells={headCells}
        tableCellsKey={tableCellsKey}
        action={handleOnClick}
        withToolbar={false}
      />
      <ModalCreateVisit
        handleClose={handleSetOpenModal}
        patientInfo={selectedPatient}
        open={openModal}
      />
    </>
  )
}

export default PatientList
