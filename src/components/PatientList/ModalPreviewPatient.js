import React, { useMemo, useContext } from 'react'
import { bool, func, string } from 'prop-types'
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import PersonIcon from '@material-ui/icons/Person'
import { MedicalRecordsContext } from 'context/MedicalRecordsContext'
import { calculateAge } from 'helpers/calculateAge'

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
    lineHeight: '1.6'
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
  }
}))

const ModalPreviewPatient = ({
  handleClose,
  open,
  name,
  gender,
  dob,
  poli,
  visitDate,
  payer,
  staffId
}) => {
  const formatVisitDate = dayjs(visitDate || Date.now())
    .locale('id')
    .format('dddd, DD-MM -YYYY')

  const classes = useStyles()
  const { staffProviders } = useContext(MedicalRecordsContext)

  const getStaffProvider = useMemo(() => {
    if (staffProviders.length && staffId) {
      const sp = staffProviders.filter(item => item.id === staffId)
      return sp?.[0] || { fullName: '' }
    }
    return { fullName: '' }
  }, [staffProviders.length, staffId])

  const age = useMemo(() => {
    if (dob) {
      return calculateAge(new Date(dob))
    }
    return '-'
  }, [dob])

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
                  <span>{name}</span>
                  <span>{gender}</span>
                  <span>{dob ? `${dob} | ${age}` : '-'}</span>
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
                <div className={classes.gridColumns}>
                  <span>Klinik</span>
                  <span>{poli}</span>

                  <span>Dokter Penanggung Jdawab</span>
                  <span>{getStaffProvider.fullName}</span>

                  <span>Jaminan</span>
                  <span>{payer}</span>

                  <span>Tanggal Kunjungan</span>
                  <span>{formatVisitDate}</span>
                </div>
              </div>
            </Paper>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

ModalPreviewPatient.propTypes = {
  handleClose: func.isRequired,
  open: bool.isRequired,
  name: string.isRequired,
  gender: string.isRequired,
  dob: string.isRequired,
  poli: string.isRequired,
  staffId: string.isRequired,
  payer: string.isRequired,
  visitDate: string.isRequired
}

export default ModalPreviewPatient
