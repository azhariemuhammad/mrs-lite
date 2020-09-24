import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'

import InputAdornment from '@material-ui/core/InputAdornment'
import Textfield from 'components/Textfield'
import DropdownMenu from 'components/DropdownMenu'

import { useForm, useFieldArray } from 'react-hook-form'
import { useStyles } from './styles'

const View = () => {
  const {
    paper,
    dflex,
    container,
    leftContent,
    rigthContent,
    wrapperBtn,
    textTitle,
    contentVal,
    tableWrapper,
    head,
    btnAssesment,
    wrapperAssesment,
    actionWrapper,
    actionBtn
  } = useStyles()
  const { errors, control, register, reset, handleSubmit } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'icd'
  })

  const icdx = [
    {
      id: 1,
      text: 'A15.0 | TBC paru BTA (+) tanpa biakan'
    },
    {
      id: 2,
      text: 'A01 | Tyhfus'
    }
  ]

  useEffect(() => {
    if (!fields.length) {
      append(['d'])
    }
  }, [fields])

  const formAssesment = [
    {
      label: 'Tinggi badan',
      required: false,
      inputName: 'height',
      defaultVal: '',
      width: '120px',
      type: 'number',
      inputProps: {
        endAdornment: <InputAdornment position="end">cm</InputAdornment>
      }
    },
    {
      label: 'Berat badan',
      required: false,
      inputName: 'weight',
      defaultVal: '',
      width: '120px',
      type: 'number',
      inputProps: {
        endAdornment: <InputAdornment position="end">kg</InputAdornment>
      }
    },
    {
      label: 'Sistole',
      required: false,
      inputName: 'sistole',
      defaultVal: '',
      width: '120px',
      type: 'number',
      inputProps: {
        endAdornment: <InputAdornment position="end">mmHg</InputAdornment>
      }
    },
    {
      label: 'Diastole',
      required: false,
      inputName: 'diastole',
      defaultVal: '',
      width: '120px',
      type: 'number',
      inputProps: {
        endAdornment: <InputAdornment position="end">mmHg</InputAdornment>
      }
    },
    {
      label: 'Anamnesa',
      required: true,
      inputName: 'anamnesis',
      defaultVal: ''
    }
  ]

  const handleAddAssesment = () => {
    append('d')
  }
  const handleRemoveAssesment = () => {
    remove(fields.length - 1)
  }
  const handleClickOnSave = data => {
    console.log(data)
  }
  return (
    <div className={container}>
      <div className={leftContent}>
        <Paper className={`${paper}`} elevation={0.5}>
          <div className="bio">
            <Typography variant="h6" component="h6">
              Derek Curtis
            </Typography>
            <div className={dflex}>
              <p className={textTitle}>Tanggal Lahir:</p>
              <p className={contentVal}>17 Agustus 1945</p>
            </div>
            <div className={dflex}>
              <p className={textTitle}>Umur:</p>
              <p className={contentVal}>46</p>
            </div>
            <div className={dflex}>
              <p className={textTitle}>Alamat:</p>
              <p className={contentVal}>Jalan Kenangan</p>
            </div>
          </div>
        </Paper>
        <Paper className={`${paper}`} elevation={0.5}>
          <div className="information">
            <Typography variant="h6" component="h6">
              Informasi:
            </Typography>
            <div className="content">
              <div className={dflex}>
                <p className={textTitle}>No. RM </p>
                <p className={contentVal}>0.000.10</p>
              </div>
              <div className={dflex}>
                <p className={textTitle}>Gender: </p>
                <p className={contentVal}>Laki-laki</p>
              </div>
              <div className={dflex}>
                <p className={textTitle}>Tinggi: </p>
                <p className={contentVal}>178cm</p>
              </div>
              <div className={dflex}>
                <p className={textTitle}>Berat: </p>
                <p className={contentVal}>67Kg</p>
              </div>
              <div className={dflex}>
                <p className={textTitle}>Kunjunga terakhir: </p>
                <p className={contentVal}>17 Agustus 2020</p>
              </div>
            </div>
          </div>
        </Paper>
      </div>
      <div className={rigthContent}>
        <Paper className={paper} elevation={0.5}>
          <div className="diagnose">
            <Typography variant="subtitle1" gutterBottom>
              Pemeriksaan Fisik
            </Typography>
            {formAssesment.map(item => (
              <Textfield
                label={item.label}
                defaultValue={item.defaultVal}
                width={item?.width || ''}
                inputName={item.inputName}
                type={item.type || ''}
                errors={errors}
                control={control}
                inputProps={item?.inputProps || {}}
              />
            ))}
            <div>
              {fields.map((_, idx) => (
                <div className={wrapperAssesment} key={idx}>
                  <DropdownMenu
                    fieldName={`Asesmen ${idx > 0 ? idx + 1 : ''}`}
                    name={`icd[${idx}].code`}
                    ref={register({ required: true })}
                    item={icdx}
                    placeholder="Pilih kode penyakit"
                  />
                  {idx + 1 === fields.length && (
                    <IconButton
                      aria-label="add"
                      onClick={handleAddAssesment}
                      className={btnAssesment}
                    >
                      <AddIcon />
                    </IconButton>
                  )}
                  {idx + 1 === fields.length && idx !== 0 && (
                    <IconButton
                      aria-label="add"
                      onClick={handleRemoveAssesment}
                      className={btnAssesment}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </div>
              ))}
            </div>
            <div className={actionWrapper}>
              <Button className={actionBtn} onClick={reset} variant="contained">
                Reset
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(handleClickOnSave)}
              >
                Simpan
              </Button>
            </div>
          </div>
        </Paper>
        <Paper className={paper} elevation={0.5}>
          <div className="information">
            <Typography variant="h6" component="h6">
              Terapi:
            </Typography>
            <button type="button" className={wrapperBtn}>
              + Tambah Terapi
            </button>
          </div>
          <div>
            <table className={tableWrapper}>
              <tr>
                <th className={head}>Nama Obat</th>
                <th className={head}>Jumlah</th>
                <th className={head}>Dosis</th>
              </tr>
              <tr>
                <td>OTOPAIN 8 ML EAR DROPS</td>
                <td>1 PCS</td>
                <td>3 X SEHARI</td>
              </tr>
              <tr>
                <td>OTOPAIN 8 ML EAR DROPS</td>
                <td>1 PCS</td>
                <td>3 X SEHARI</td>
              </tr>
            </table>
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default View
