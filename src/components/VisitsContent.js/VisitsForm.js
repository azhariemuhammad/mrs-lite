import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { func } from 'prop-types'
import Button from '@material-ui/core/Button'
import Textfield from 'components/Textfield'
import { PatientsContext } from 'context/PatientsContext'
import ToasterContext from 'context/ToasterContext'
import { useVisitStyles } from './styles'

const VisitsForm = ({ handleSetLoading }) => {
  const classes = useVisitStyles()
  const { showToaster } = useContext(ToasterContext)
  const { handleSearchPatient } = useContext(PatientsContext)
  const { handleSubmit, errors, control, reset } = useForm()
  const handleOnSearch = async data => {
    handleSetLoading(true)
    const { error } = await handleSearchPatient(data)
    if (error) {
      showToaster({ text: error.message, error: true })
    }
    handleSetLoading(false)
  }
  const visitsFormField = [
    {
      label: 'Nama Depan',
      required: false,
      inputName: 'first_name',
      defaultVal: ''
    },
    {
      label: 'Nama Kepala Keluarga',
      required: false,
      inputName: 'hoh',
      defaultVal: ''
    },
    {
      label: 'No. KTP',
      required: false,
      inputName: 'ktp_id',
      defaultVal: ''
    },
    {
      label: 'No. Hp',
      required: false,
      inputName: 'phone',
      defaultVal: ''
    }
  ]
  return (
    <>
      <div className={classes.wrapperVisits}>
        <div>Cari pasien</div>
        <div className={classes.grid}>
          <div className="gridItem">
            {visitsFormField.map(v => (
              <Textfield
                label={v.label}
                defaultValue={v.defaultVal}
                fullWidth
                inputName={v.inputName}
                errors={errors}
                control={control}
              />
            ))}
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
