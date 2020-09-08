import React, { useContext, useState } from 'react'
import { bool, func, string, shape, number } from 'prop-types'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import PersonIcon from '@material-ui/icons/Person'
import DropdownMenu from 'components/DropdownMenu'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { MedicalRecordsContext } from 'context/MedicalRecordsContext'
import ToasterContext from 'context/ToasterContext'
import { PAYERS } from '../constants'
import { useVisitStyles } from './styles'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    minWidth: '400px',
    textAlign: 'center',
    minHeight: '400px',
    height: 'auto',
    width: '500px',
    borderRadius: '8px',
    padding: '32px'
  },
  dFlex: {
    display: 'flex',
    padding: '8px 8px 12px 8px'
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    marginLeft: '16px',
    lineHeight: '1.6',
    padding: '8px'
  },
  personCircle: {
    padding: '9px 10px',
    border: '1px solid',
    borderRadius: '50%'
  },
  gridColumns: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '8px 8px 12px 8px'
  },
  textArea: {
    height: '51px',
    borderRadius: '4px',
    borderColor: '#e0e0e0',
    width: '100%',
    padding: '8px 12px'
  }
}))

const ModalCreateVisit = ({ handleClose, open, patientInfo }) => {
  const { register, handleSubmit } = useForm()
  const classes = useStyles()
  const [onSaveLoading, setOnSaveLoading] = useState(false)
  const { showToaster } = useContext(ToasterContext)
  const visitStyles = useVisitStyles()
  const { departments, handleCreateVisits, staffProviders } = useContext(
    MedicalRecordsContext
  )
  const getItemStaffProviders = () => {
    if (!staffProviders.length) return []
    return staffProviders.map(sp => {
      return { id: sp.id, text: sp.fullName }
    })
  }

  const getItemDepartments = () => {
    if (!departments.length) return []
    return departments.map(dp => ({
      id: dp.id,
      text: dp.name
    }))
  }

  const handleClickOnSave = async data => {
    setOnSaveLoading(true)
    const { payer, chief_complain, department, staff_provider } = data

    const newDataVisit = {
      staff_provider: parseInt(staff_provider, 10),
      status_visit: '1',
      department: parseInt(department, 10),
      payer: parseInt(payer, 10),
      date_visit: new Date().toISOString(),
      patient: patientInfo?.id,
      chief_complain
    }
    try {
      const { response, error } = await handleCreateVisits(newDataVisit)
      if (response && !error) {
        showToaster({ text: 'Berhasil menyimpan data' })
      } else {
        showToaster({ text: 'Gagal menyimpan data', error: true })
      }
    } catch (error) {
      showToaster({ text: 'Gagal menyimpan data', error: true })
    }
    setOnSaveLoading(false)
    handleClose()
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Paper style={{ marginBottom: '16px' }} elevation={1}>
              <div
                style={{
                  textAlign: 'left',
                  padding: '8px 8px 12px 8px'
                }}
              >
                Informasi Pasien
              </div>
              <div className={classes.dFlex}>
                <div className={classes.personCircle}>
                  <PersonIcon style={{ fontSize: 40 }} color="inherit" />
                </div>
                <div className={classes.textContent}>
                  <span>{patientInfo.name}</span>
                  <span>{patientInfo.gender}</span>
                  <span>{patientInfo.dob}</span>
                </div>
              </div>
            </Paper>
            <Paper elevation={1}>
              <div
                style={{
                  textAlign: 'left',
                  padding: '8px 8px 12px 8px'
                }}
              >
                Informasi Perawatan
              </div>
              <div className={classes.textContent}>
                <DropdownMenu
                  fieldName="Jaminan"
                  name="payer"
                  ref={register({ required: true })}
                  item={PAYERS}
                  placeholder="Pilih Jaminan"
                />

                <DropdownMenu
                  fieldName="Poli Tujuan"
                  name="department"
                  ref={register({ required: true })}
                  item={getItemDepartments()}
                  placeholder="Pilih Poli Tujuan"
                />

                <DropdownMenu
                  fieldName="Pemeriksa"
                  name="staff_provider"
                  ref={register({ required: true })}
                  item={getItemStaffProviders()}
                  placeholder="Pilih pemeriksa"
                />

                <div className={classes.flex}>
                  <div className={classes.leftSide}>Keluhan</div>
                  <TextareaAutosize
                    aria-label="minimum height"
                    name="chief_complain"
                    defaultValue=""
                    ref={register}
                    rowsMin={3}
                    className={classes.textArea}
                  />
                </div>
                <div className={visitStyles.actionWrapper}>
                  <Button
                    className={visitStyles.actionBtn}
                    onClick={handleClose}
                    variant="contained"
                  >
                    Batal
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={onSaveLoading}
                    onClick={handleSubmit(handleClickOnSave)}
                  >
                    {onSaveLoading ? 'Loading...' : 'Simpan'}
                  </Button>
                </div>
              </div>
            </Paper>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

ModalCreateVisit.propTypes = {
  handleClose: func.isRequired,
  open: bool.isRequired,
  patientInfo: shape({ name: string, dob: string, gender: string, id: number })
    .isRequired
}

export default ModalCreateVisit
