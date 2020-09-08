import React, { useState, useEffect } from 'react'

import CustomTable from 'components/CustomTable'
import { normalizedVisits } from 'helpers/normalizedVisits'
import fetchRequest from 'helpers/fetchRequest'
import ModalPreviewPatient from './ModalPreviewPatient'

const PatientListCard = () => {
  const [openModal, setOpenModal] = useState(false)
  const [visits, setVisits] = useState([])
  const [selectedPatient, setSelectedPatient] = useState({})

  useEffect(() => {
    async function getVisits() {
      const { response, error } = await fetchRequest({}, 'all-visits', 'GET')
      if (error) {
        setVisits([])
        return
      }
      setVisits(normalizedVisits(response) || [])
    }
    if (!visits.length) {
      getVisits()
    }
  }, [])

  const headCells = [
    {
      id: 'medRecNum',
      numeric: false,
      disablePadding: true,
      label: 'No. Rekam Medik'
    },
    { id: 'name', numeric: false, disablePadding: false, label: 'Nama' },
    {
      id: 'chiefComplaint',
      numeric: false,
      disablePadding: false,
      label: 'Keluhan'
    },
    {
      id: 'gender',
      numeric: false,
      disablePadding: false,
      label: 'Jenis Kelamin'
    },
    {
      id: 'payer',
      numeric: false,
      disablePadding: false,
      label: 'Jaminan'
    },
    {
      id: 'poli',
      numeric: false,
      disablePadding: false,
      label: 'Poli Tujuan'
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

  const handleOnClick = e => {
    setSelectedPatient(e)
    handleSetOpenModal()
  }

  const { name, gender, dob, poli, staffId, visitDate, payer } = selectedPatient
  return (
    <>
      <CustomTable
        dataTable={visits}
        headCells={headCells}
        tableCellsKey={tableCellsKey}
        action={handleOnClick}
        actionText="Lihat"
      />
      <ModalPreviewPatient
        handleClose={handleSetOpenModal}
        open={openModal}
        patientInfo={selectedPatient}
        name={name}
        gender={gender}
        dob={dob}
        poli={poli}
        staffId={staffId}
        visitDate={visitDate}
        payer={payer}
      />
    </>
  )
}

export default PatientListCard
