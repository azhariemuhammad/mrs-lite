import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { func } from 'prop-types'
import Button from '@material-ui/core/Button'
import Textfield from 'components/Textfield'
import { PatientsContext } from 'context/PatientsContext'
import Toaster from 'components/Toaster'
import { ToasterContext } from 'context/ToasterContext'
import { useVisitStyles } from './styles'

const VisitsForm = ({ handleSetLoading }) => {
  const classes = useVisitStyles()
  const { setOpen } = useContext(ToasterContext)
  const [message, setMessageToaster] = useState('')
  const { handleSearchPatient } = useContext(PatientsContext)
  const { handleSubmit, errors, control, reset } = useForm()
  const handleOnSearch = async data => {
    handleSetLoading(true)
    const resp = await handleSearchPatient(data)

    if (resp.error) {
      setMessageToaster(resp.error)
      setOpen(true)
    }
    handleSetLoading(false)
  }

  return (
    <>
      <Toaster message={message} />
      <div className={classes.wrapperVisits}>
        <div>Cari pasien</div>
        <div className={classes.grid}>
          <div className="gridItem">
            <Textfield
              label="Nama Depan"
              defaultValue=""
              fullWidth
              inputName="first_name"
              errors={errors}
              control={control}
            />
            <Textfield
              label="No. KTP"
              defaultValue=""
              fullWidth
              inputName="ktp_id"
              errors={errors}
              control={control}
            />
            <Textfield
              label="No. Ponsel"
              defaultValue=""
              fullWidth
              inputName="phone"
              errors={errors}
              control={control}
            />
            <div className={classes.actionWrapper}>
              <Button
                className={classes.actionBtn}
                onClick={reset}
                variant="contained"
              >
                Reset
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(handleOnSearch)}
              >
                Cari
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

VisitsForm.propTypes = {
  handleSetLoading: func.isRequired
}

export default VisitsForm
