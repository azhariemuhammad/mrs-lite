import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { useStyles } from './styles'

const Searchbar = () => {
  const { searchInput } = useStyles()
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div>
      <Toolbar style={{ padding: '0' }}>
        <Grid container spacing={16} alignItems="center">
          <FormControl fullWidth>
            <OutlinedInput
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari dengan No. KTP atau Nama"
              className={searchInput}
              InputProps={{
                disableUnderline: true
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {}}
                    onMouseDown={() => {}}
                  >
                    <SearchIcon color="inherit" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Toolbar>
    </div>
  )
}

export default Searchbar
