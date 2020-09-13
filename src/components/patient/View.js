import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import InputAdornment from '@material-ui/core/InputAdornment'
import Textfield from 'components/Textfield'

import { useForm } from 'react-hook-form'
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
    head
  } = useStyles()
  const { errors, control } = useForm()

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
            <Textfield
              label="Tinggi badan"
              defaultValue=""
              width="120px"
              inputName="height"
              type="number"
              errors={errors}
              control={control}
              inputProps={{
                endAdornment: <InputAdornment position="end">cm</InputAdornment>
              }}
            />
            <Textfield
              label="Berat badan"
              defaultValue=""
              inputName="weight"
              required
              width="120px"
              errors={errors}
              control={control}
              inputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>
              }}
            />
            <Typography variant="subtitle1" gutterBottom>
              Tekanan Darah
            </Typography>
            <Textfield
              label="Sistole"
              defaultValue=""
              width="120px"
              inputName="sitole"
              required
              errors={errors}
              control={control}
              inputProps={{
                endAdornment: (
                  <InputAdornment position="end">mmHg</InputAdornment>
                )
              }}
            />
            <Textfield
              label="Diastole"
              defaultValue=""
              width="120px"
              inputName="diastole"
              required
              errors={errors}
              control={control}
              inputProps={{
                endAdornment: (
                  <InputAdornment position="end">mmHg</InputAdornment>
                )
              }}
            />
            <Textfield
              label="Diagnosa"
              defaultValue=""
              fullWidth
              inputName="diagnose"
              required
              errors={errors}
              control={control}
            />
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