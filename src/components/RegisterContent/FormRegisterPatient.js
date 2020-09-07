import React, { useState, useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Radio from '@material-ui/core/Radio'
import { useForm } from 'react-hook-form'
import { navigate } from '@reach/router'

import ToasterContext from 'context/ToasterContext'
import { MedicalRecordsContext } from 'context/MedicalRecordsContext'

import { useStyles } from './styles'
import Textfield from '../Textfield'
import { SEX, PAYERS } from '../constants'
import DropdownMenu from '../DropdownMenu'

const FormRegisterPatient = () => {
  const classes = useStyles()
  const { register, handleSubmit, errors, control, reset } = useForm()
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

  const {
    departments,
    handleRegisterPatients,
    handleCreateVisits,
    staffProviders
  } = useContext(MedicalRecordsContext)
  const { showToaster } = useContext(ToasterContext)

  const handleOnChange = (text, inputName) => {
    setRegisterNewPatient({ ...registerNewPatient, ...{ [inputName]: text } })
  }

  const handleSetGender = e => {
    const val = e.target.value
    setRegisterNewPatient({ ...registerNewPatient, ...{ sex: val } })
  }

  const handleSuccessSubmit = isSaveAndAdd => {
    showToaster({ text: 'Berhasil menyimpan data' })
    reset()
    if (!isSaveAndAdd) {
      navigate('/patient-list/')
    }
  }

  const handleClickOnSave = async (data, isSaveAndAdd = false) => {
    const {
      first_name,
      last_name,
      ktp_id,
      date_of_birth,
      city,
      street_name,
      phone,
      mr_code,
      payer,
      chief_complain,
      department,
      staff_provider
    } = data
    const sexString = registerNewPatient.sex.toLowerCase()
    const sex = SEX.findIndex(item => item === sexString)
    const DOB = date_of_birth ? new Date(date_of_birth) : new Date()
    const dateOfBirth = DOB.toISOString()

    const newDataPatient = {
      degree: 1,
      sex,
      district: '',
      first_name,
      last_name,
      street_name,
      ktp_id,
      date_of_birth: dateOfBirth,
      city,
      phone,
      mr_code
    }

    const newDataVisit = {
      staff_provider: parseInt(staff_provider, 10),
      status_visit: '1',
      department: parseInt(department, 10),
      payer: parseInt(payer, 10),
      date_visit: new Date().toISOString(),
      chief_complain
    }
    try {
      const resPatient = await handleRegisterPatients(newDataPatient)
      if (resPatient.id) {
        newDataVisit.patient = resPatient.id
        const resVisit = await handleCreateVisits(newDataVisit)
        if (resVisit) {
          handleSuccessSubmit(isSaveAndAdd)
        }
      }
    } catch (error) {
      console.error(error)
      showToaster({ text: 'Gagal menyimpan data', error: true })
    }
  }
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
  const handleReset = () => {
    reset()
  }

  return (
    <>
      <div className={classes.root}>
        <div>
          <div className={classes.sectionWrapper}>
            <Typography
              className={classes.mrsHeading}
              component="h4"
              color="textSecondary"
            >
              Demografi
            </Typography>

            <Textfield
              label="Nama Depan"
              defaultValue={registerNewPatient.first_name}
              fullWidth
              inputName="first_name"
              required
              errors={errors}
              control={control}
            />
            <Textfield
              label="Nama Belakang"
              defaultValue={registerNewPatient.last_name}
              fullWidth
              inputName="last_name"
              required
              errors={errors}
              control={control}
            />

            <Textfield
              label="No. KTP"
              defaultValue={registerNewPatient.ktp_id}
              fullWidth
              inputName="ktp_id"
              errors={errors}
              control={control}
            />

            <div>
              <FormControl component="fieldset">
                <div className={classes.flex}>
                  <div className={classes.leftSide}>Gender</div>
                  <RadioGroup
                    className={classes.radioGroup}
                    aria-label="gender"
                    name="gender"
                    value={registerNewPatient.sex}
                    onChange={handleSetGender}
                  >
                    <FormControlLabel
                      value="Perempuan"
                      control={<Radio />}
                      label="Perempuan"
                    />
                    <FormControlLabel
                      value="Laki-laki"
                      control={<Radio />}
                      label="Laki-laki"
                    />
                  </RadioGroup>
                </div>
              </FormControl>
            </div>

            <Textfield
              label="Tanggal Lahir"
              id="date"
              type="date"
              defaultValue={registerNewPatient.birth_date}
              fullWidth
              required
              errors={errors}
              inputName="date_of_birth"
              control={control}
            />
          </div>
          <hr className={classes.divider} />
          <div className={classes.sectionWrapper}>
            <Typography
              component="h4"
              className={classes.mrsHeading}
              color="textSecondary"
            >
              Informasi Kontak
            </Typography>

            <Textfield
              label="Alamat"
              defaultValue={registerNewPatient.street_name}
              fullWidth
              inputName="street_name"
              control={control}
              errors={errors}
              required
              handler={(text, inputName) => handleOnChange(text, inputName)}
            />

            <Textfield
              label="Kota/Kabupaten"
              defaultValue={registerNewPatient.city}
              fullWidth
              inputName="city"
              control={control}
              errors={errors}
              required
              handler={(text, inputName) => handleOnChange(text, inputName)}
            />

            <Textfield
              label="Nomor Ponsel"
              defaultValue={registerNewPatient.phone}
              fullWidth
              inputName="phone"
              type="number"
              required
              control={control}
              errors={errors}
            />
          </div>
        </div>
        <hr className={classes.divider} />
        <div className={classes.sectionWrapper}>
          <Typography
            className={classes.mrsHeading}
            component="h4"
            color="textSecondary"
          >
            Informasi Jaminan
          </Typography>

          <Textfield
            label="No. Rekam Medis"
            defaultValue={registerNewPatient.mr_code}
            fullWidth
            inputName="mr_code"
            type="text"
            control={control}
            errors={errors}
            required
          />
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
        </div>
        <div className={classes.actionWrapper}>
          <Button
            className={classes.actionBtn}
            variant="contained"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            className={classes.actionBtn}
            variant="contained"
            color="secondary"
            onClick={handleSubmit(() => handleClickOnSave(true))}
          >
            Simpan & Tambah Baru
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit(() => handleClickOnSave(false))}
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
