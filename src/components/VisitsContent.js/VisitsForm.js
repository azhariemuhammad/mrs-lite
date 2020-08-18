import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import Textfield from 'components/Textfield'
import { PatientsContext } from 'context/PatientsContext'
import { useVisitStyles } from './styles'

const VisitsForm = () => {
  const classes = useVisitStyles()
  const { handleSearchPatient } = useContext(PatientsContext)
  const { handleSubmit, errors, control, reset } = useForm()
  const handleOnSearch = async data => {
    try {
      await handleSearchPatient(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
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
  )
}

export default VisitsForm
