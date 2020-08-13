import React, { useState, useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Radio from '@material-ui/core/Radio'
import { useForm } from 'react-hook-form'

import { ToasterContext } from 'context/ToasterContext'
import { MedicalRecordsContext } from 'context/MedicalRecordsContext'

import { useStyles } from './styles'
import Toaster from '../Toaster'
import Textfield from '../Textfield'

const FormRegisterPatient = () => {
  const classes = useStyles()
  const { register, handleSubmit, errors, control, watch } = useForm()
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

  console.log(watch('poli'))

  const handleOnChange = (text, inputName) => {
    setRegisterNewPatient({ ...registerNewPatient, ...{ [inputName]: text } })
  }

  const handleSetGender = e => {
    setRegisterNewPatient({ ...registerNewPatient, ...{ sex: e.target.value } })
  }

  const handleClickOnSave = data => {
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
    console.log('masuk sini')
    console.log({ data })
  }

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
                errors={errors}
                control={control}
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
                errors={errors}
                control={control}
              />
            </div>
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
                  <div className={classes.leftSide}>Tanggal Lahir</div>
                  <Textfield
                    id="date"
                    type="date"
                    defaultValue={registerNewPatient.birth_date}
                    fullWidth
                    errors={errors}
                    inputName="birth_date"
                    control={control}
                    handler={(text, inputName) =>
                      handleOnChange(text, inputName)
                    }
                    className={classes.textField}
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
                control={control}
                errors={errors}
                required
                handler={(text, inputName) => handleOnChange(text, inputName)}
              />
            </div>
            <div className={classes.flex}>
              <div className={classes.leftSide}>Kota/Kabupaten</div>
              <Textfield
                defaultValue={registerNewPatient.city}
                fullWidth
                inputName="city"
                control={control}
                errors={errors}
                required
                handler={(text, inputName) => handleOnChange(text, inputName)}
              />
            </div>
            <div className={classes.flex}>
              <div className={classes.leftSide}>Nomor Ponsel</div>
              <Textfield
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
              control={control}
              errors={errors}
              required
            />
          </div>
          <FormControl component="fieldset">
            <div className={classes.flex}>
              <div className={classes.leftSide}>Jaminan</div>
              <select
                name="payer"
                className={classes.select}
                defaultValue=""
                ref={register}
                style={{ width: '150px' }}
              >
                <option value={1}>BPJS</option>
                <option value={2}>UMUM</option>
              </select>
            </div>
          </FormControl>
          <div></div>
          <FormControl component="fieldset">
            <div className={classes.flex}>
              <div className={classes.leftSide}>Poli Tujuan</div>
              <select
                name="poli"
                className={classes.select}
                defaultValue=""
                ref={register}
                style={{ width: '150px' }}
              >
                <>
                  {departments.map(item => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    )
                  })}
                </>
              </select>
            </div>
          </FormControl>
          <div className={classes.flex}>
            <div className={classes.leftSide}>Keluhan</div>
            <TextareaAutosize
              aria-label="minimum height"
              name="chiefComplain"
              defaultValue={registerNewVisit.chief_complain}
              ref={register}
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
            onClick={handleSubmit(handleClickOnSave)}
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
