import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { useStyles } from './styles'

const View = () => {
  const { paper, dflex, container, leftContent, rigthContent } = useStyles()
  return (
    <div className={container}>
      <div className={leftContent}>
        <Paper className={`${paper}`} elevation={1}>
          <div className="bio">
            <Typography variant="h6" component="h6">
              Derek Curtis
            </Typography>
            <p>Age: 48</p>
          </div>
        </Paper>
        <Paper className={`${paper}`} elevation={1}>
          <div className="information">
            <Typography variant="h6" component="h6">
              Informasi:
            </Typography>
            <div className="content">
              <div className={dflex}>
                <div>No. RM </div>
                <div>0.000.10</div>
              </div>
              <div className={dflex}>
                <div>Gender: </div>
                <div>Laki-laki</div>
              </div>
              <div className={dflex}>
                <div>Tinggi: </div>
                <div>178cm</div>
              </div>
              <div className={dflex}>
                <div>Berat: </div>
                <div>65Kg</div>
              </div>
              <div className={dflex}>
                <div>Tanggal Kunjungan Terakhir </div>
                <div>17 Agustus 2020</div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
      <Paper className={`${paper} ${rigthContent}`} elevation={1}>
        <div className="information">
          <Typography variant="h6" component="h6">
            Obat:
          </Typography>
          <div className="content">
            <div className={dflex}>
              <div>No. RM </div>
              <div>0.000.10</div>
            </div>
            <div className={dflex}>
              <div>Gender: </div>
              <div>Laki-laki</div>
            </div>
            <div className={dflex}>
              <div>Tinggi: </div>
              <div>178cm</div>
            </div>
            <div className={dflex}>
              <div>Berat: </div>
              <div>65Kg</div>
            </div>
            <div className={dflex}>
              <div>Tanggal Kunjungan Terakhir </div>
              <div>17 Agustus 2020</div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default View
