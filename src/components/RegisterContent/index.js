import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import FormRegisterPatient from './FormRegisterPatient';

import { styles } from './styles';

function RegisterContent({ classes }) {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div className={classes.container}>
            <Paper className={classes.paper}>
                <Typography
                    variant="h6"
                    component="h2"
                    className={classes.mrsHeading}
                    gutterBottom
                >
                    Register Pasien
                </Typography>
                <div>
                    <div>
                        <Toolbar style={{ padding: '0' }}>
                            <Grid container spacing={16} alignItems="center">
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        value={searchQuery}
                                        onChange={e =>
                                            setSearchQuery(e.target.value)
                                        }
                                        placeholder="Cari dengan No. KTP atau Nama"
                                        InputProps={{
                                            disableUnderline: true,
                                            className: classes.searchInput
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => {}}
                                                    onMouseDown={() => {}}
                                                >
                                                    <SearchIcon
                                                        className={
                                                            classes.block
                                                        }
                                                        color="inherit"
                                                    />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                        </Toolbar>
                    </div>
                </div>
                <FormRegisterPatient />
            </Paper>
        </div>
    );
}

RegisterContent.propTypes = {
    classes: PropTypes.shape({
        block: {},
        searchInput: {},
        mrsHeading: {},
        container: {},
        paper: {}
    }).isRequired
};

export default withStyles(styles)(RegisterContent);
