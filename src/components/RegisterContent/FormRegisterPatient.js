import React, { useState, useContext } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Radio from '@material-ui/core/Radio'
import { navigate } from '@reach/router'
import { ToasterContext } from 'context/ToasterContext'
import { MedicalRecordsContext } from 'context/MedicalRecordsContext'

import { useStyles } from './styles'
import Toaster from '../Toaster'
import Textfield from '../Textfield'

const FormRegisterPatient = () => {
  const classes = useStyles()
  const patientFields = {
    first_name: {
      validator: 'required',
      errors: ''
    },
    last_name: {
      validator: 'required',
      errors: ''
    },
    sex: {
      validator: 'required',
      errors: ''
    },
    street_name: {
      validator: 'required',
      errors: ''
    },
    district: {
      validator: 'required',
      errors: ''
    },
    ktp_id: {
      validator: '',
      errors: ''
    },
    degree: {
      validator: '',
      errors: ''
    },
    city: {
      validator: 'required',
      errors: ''
    },
    phone: {
      validator: 'required',
      errors: ''
    }
  }
  const [registerNewPatient, setRegisterNewPatient] = useState({
    first_name: '',
    last_name: '',
    sex: 'Perempuan',
    street_name: '',
    district: '',
    ktp_id: '',
    degree: 0,
    city: '',
    phone: '',
    mr_code: ''
  })
  const [errorsRegisterPatient, setErrorsRegisterPatient] = useState(
    patientFields
  )
  const [errorsregisterNewVisit, setErrorsregisterNewVisit] = useState({
    department: null,
    staff_provider: null,
    chief_complain: '',
    payer: null,
    status_visit: 1
  })
  const [registerNewVisit, setRegisterNewVisit] = useState({
    department: null,
    staff_provider: null,
    chief_complain: '',
    payer: null,
    status_visit: 1
  })
  const { dataPatients, departments, handleRegisterPatients } = useContext(
    MedicalRecordsContext
  )
  console.log(departments)
  const { setOpen } = useContext(ToasterContext)
  const [message, setMessageToaster] = useState('')

  console.log({ dataPatients })

  const handleOnChange = (text, inputName) => {
    setRegisterNewPatient({ ...registerNewPatient, ...{ [inputName]: text } })
  }

  const handleOnChangeVisit = (text, inputName) => {
    setRegisterNewVisit({ ...registerNewVisit, ...{ [inputName]: text } })
  }

  const handleSetGender = e => {
    setRegisterNewPatient({ ...registerNewPatient, ...{ sex: e.target.value } })
  }

  const handleSetPayer = e => {
    setRegisterNewPatient({
      ...registerNewPatient,
      ...{ payer: e.target.value }
    })
  }
  const handleSetPoli = e => {
    const val = e.target.value
    handleOnChangeVisit(val, 'department')
  }

  const handleValidation = (fields, patientData) => {
    Object.keys(fields).map((item, idx) => {
      if (fields[item].validator === 'required') {
        const field = Object.keys(patientData)[idx]
        if (patientData[item].length < 1) {
          setErrorsRegisterPatient({
            ...errorsRegisterPatient,
            ...{
              [Object.keys(fields)[idx]]: {
                errors: 'Wajib diisi',
                validator: 'required'
              }
            }
          })
        }
      }
      return false
    })
  }
  const handleClickOnSave = () => {
    // const newDataPatient = {
    //   name,
    //   gender,
    //   birthDate,
    //   address,
    //   city,
    //   phoneNumber,
    //   payer,
    //   poli,
    //   medRecoredNumber,
    //   chiefComplaint
    // }
    // handleRegisterPatients(newDataPatient)
    // setMessageToaster('Berhasil menyimpan data')
    // setOpen(true)
    // navigate('/patient-list')
    handleValidation(patientFields, registerNewPatient)
  }

  console.log({ errorsRegisterPatient })

  return (
    <>
      <Toaster message={message} />
      <div className={classes.root}>
        <div>
          <div className={classes.sectionWrapper}>
            <Typography
              className={classes.mrsHeading}
              component="h4"
              variant="h7"
              color="textSecondary"
            >
              Demografi
            </Typography>
            <div className={classes.flex}>
              <div className={classes.leftSide}>Nama Depan</div>
              <Textfield
                defaultValue={registerNewPatient.first_name}
                fullWidth
                inputName="first_name"
                handler={(text, inputName) => handleOnChange(text, inputName)}
                required
                error
                InputProps={{
                  disableUnderline: true,
                  className: classes.textInput
                }}
              />
            </div>
            <div className={classes.flex}>
              <div className={classes.leftSide}>Nama Belakang</div>
              <Textfield
                defaultValue={registerNewPatient.last_name}
                fullWidth
                inputName="last_name"
                handler={(text, inputName) => handleOnChange(text, inputName)}
                required
                InputProps={{
                  disableUnderline: true,
                  className: classes.textInput
                }}
              />
            </div>
            <div>
              <FormControl component="fieldset">
                <div className={classes.flex}>
                  <FormLabel className={classes.leftSide} component="legend">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    className={classes.radioGroup}
                    aria-label="gender"
                    name="gender1"
                    value={registerNewPatient.sex}
                    onChange={handleSetGender}
                  >
                    <FormControlLabel
                      value="Perempuan"
                      control={<Radio />}
                      label="Perempuan"
                    />
                    <FormControlLabel
                      value="Laki laki"
                      control={<Radio />}
                      label="Laki laki"
                    />
                  </RadioGroup>
                </div>
              </FormControl>
            </div>
            <div>
              <FormControl component="fieldset">
                <div className={classes.flex}>
                  <FormLabel className={classes.leftSide} component="legend">
                    Tanggal Lahir
                  </FormLabel>
                  <Textfield
                    id="date"
                    type="date"
                    defaultValue={registerNewPatient.birth_date}
                    fullWidth
                    inputName="birth_date"
                    handler={(text, inputName) =>
                      handleOnChange(text, inputName)
                    }
                    className={classes.textField}
                    InputProps={{
                      disableUnderline: true,
                      className: classes.textInput
                    }}
                  />
                </div>
              </FormControl>
            </div>
          </div>
          <hr className={classes.divider} />
          <div className={classes.sectionWrapper}>
            <Typography
              component="h4"
              className={classes.mrsHeading}
              variant="h7"
              color="textSecondary"
            >
              Informasi Kontak
            </Typography>
            <div className={classes.flex}>
              <div className={classes.leftSide}>Alamat</div>
              <Textfield
                defaultValue={registerNewPatient.street_name}
                fullWidth
                inputName="street_name"
                handler={(text, inputName) => handleOnChange(text, inputName)}
                InputProps={{
                  disableUnderline: true,
                  className: classes.textInput
                }}
              />
            </div>
            <div className={classes.flex}>
              <div className={classes.leftSide}>Kota/Kabupaten</div>
              <Textfield
                defaultValue={registerNewPatient.city}
                fullWidth
                inputName="city"
                handler={(text, inputName) => handleOnChange(text, inputName)}
                InputProps={{
                  disableUnderline: true,
                  className: classes.textInput
                }}
              />
            </div>
            <div className={classes.flex}>
              <div className={classes.leftSide}>Nomor Ponsel</div>
              <Textfield
                defaultValue={registerNewPatient.phone}
                fullWidth
                inputName="phone"
                type="number"
                handler={(text, inputName) => handleOnChange(text, inputName)}
                InputProps={{
                  disableUnderline: true,
                  className: classes.textInput
                }}
              />
            </div>
          </div>
        </div>
        <hr className={classes.divider} />
        <div className={classes.sectionWrapper}>
          <Typography
            className={classes.mrsHeading}
            component="h4"
            variant="h7"
            color="textSecondary"
          >
            Informasi Jaminan
          </Typography>
          <div className={classes.flex}>
            <div className={classes.leftSide}>No. Rekam Medis</div>
            <Textfield
              defaultValue={registerNewPatient.mr_code}
              fullWidth
              inputName="mr_code"
              type="text"
              handler={(text, inputName) => handleOnChange(text, inputName)}
              InputProps={{
                disableUnderline: true,
                className: classes.textInput
              }}
            />
          </div>
          <FormControl component="fieldset">
            <div className={classes.flex}>
              <div className={classes.leftSide}>Jaminan</div>
              <Select
                value={registerNewVisit.payer}
                onChange={handleSetPayer}
                style={{ width: '150px' }}
              >
                <MenuItem value={1}>BPJS</MenuItem>
                <MenuItem value={2}>UMUM</MenuItem>
              </Select>
            </div>
          </FormControl>
          <div></div>
          <FormControl component="fieldset">
            <div className={classes.flex}>
              <div className={classes.leftSide}>Poli Tujuan</div>
              <Select
                value={
                  registerNewVisit.department ? registerNewVisit.department : ''
                }
                onChange={handleSetPoli}
                style={{ width: '150px' }}
              >
                <MenuItem value={1}>Poli Umum</MenuItem>
                <MenuItem value={2}>Poli Gigi</MenuItem>
              </Select>
            </div>
          </FormControl>
          <div className={classes.flex}>
            <div className={classes.leftSide}>Keluhan</div>
            <TextareaAutosize
              aria-label="minimum height"
              value={registerNewVisit.chief_complain}
              onChange={e =>
                handleOnChangeVisit(e.target.value, 'chief_complain')
              }
              rowsMin={3}
              className={classes.textArea}
            />
          </div>
        </div>
        <div className={classes.actionWrapper}>
          <Button className={classes.actionBtn} variant="contained">
            Batal
          </Button>
          <Button
            className={classes.actionBtn}
            variant="contained"
            color="secondary"
          >
            Simpan & Tambah Baru
          </Button>
          <Button
            variant="contained"
            onClick={handleClickOnSave}
            color="primary"
          >
            Simpan
          </Button>
        </div>
      </div>
    </>
  )
}

export default FormRegisterPatient
