import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import Textfield from 'components/Textfield'
import { useVisitStyles } from './styles'
import searchPatients from '../../helpers/searchPatients'

const VisitsForm = () => {
  const classes = useVisitStyles()
  const { handleSubmit, errors, control, reset } = useForm()
  const handleSearchPatient = useCallback(async data => {
    const res = await searchPatients(data)
    console.log(res)
  }, [])

  return (
    <div className="wrapperVisits">
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
            <Button className={classes.actionBtn} variant="contained">
              Reset
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(handleSearchPatient)}
            >
              Cari
            </Button>
          </div>
        </div>
        <div className="gridItem">foo</div>
      </div>
    </div>
  )
}

export default VisitsForm
