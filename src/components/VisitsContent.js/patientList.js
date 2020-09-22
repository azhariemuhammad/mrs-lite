import React, { useState, useContext } from 'react'
import { bool } from 'prop-types'
import { PatientsContext } from 'context/PatientsContext'

import CustomTable from 'components/CustomTable'
import ModalCreateVisit from './ModalCreateVisit'

const PatientList = ({ loading }) => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState({})
  const { searchedPatient } = useContext(PatientsContext)
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
      id: 'hoh',
      numeric: false,
      disablePadding: false,
      label: 'Kepala Keluarga'
    },
    {
      id: 'address',
      numeric: false,
      disablePadding: false,
      label: 'Alamat'
    },
    { id: 'action', numeric: false, disablePadding: false, label: '' }
  ]
  const tableCellsKey = [
    'medRecoredNumber',
    'name',
    'dob',
    'gender',
    'headOfHousehold',
    'address'
  ]

  const handleSetOpenModal = () => {
    if (openModal) {
      setSelectedPatient({})
    }

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
        loading={loading}
        actionText="Buat kunjungan"
      />
      {Object.keys(selectedPatient).length > 0 && (
        <ModalCreateVisit
          handleClose={handleSetOpenModal}
          patientInfo={selectedPatient}
          open={openModal}
        />
      )}
    </>
  )
}

PatientList.propTypes = {
  loading: bool.isRequired
}

export default PatientList
