import React, { useState } from 'react'
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

import { useStyles } from './styles'

const FormRegisterPatient = () => {
	const classes = useStyles()
	const [name, setName] = useState('')
	const [gender, setGender] = useState('Perempuan')
	const [birthDate, setBirthDate] = useState('2017-05-24')
	const [address, setAddress] = useState('')
	const [city, setCity] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [payer, setPayer] = useState(null)

	const handleSetName = e => {
		const val = e.target.value
		setName(val)
	}

	const handleSetGender = e => {
		setGender(e.target.value)
	}

	const handleSetBirthDate = e => {
		setBirthDate(e.target.value)
	}

	const handleSetAddress = e => {
		setAddress(e.target.value)
	}
	const handleSetCity = e => {
		setCity(e.target.value)
	}

	const handleSetPhoneNumber = e => {
		setPhoneNumber(e.target.value)
	}

	const handleSetPayer = e => {
		setPayer(e.target.value)
	}

	return (
		<div className={classes.root}>
			<div>
				<div className={classes.sectionWrapper}>
					<Typography className={classes.mrsHeading} component="h4" variant="h7" color="textSecondary">
						Demografi
					</Typography>
					<div className={classes.flex}>
						<div className={classes.leftSide}>Nama</div>
						<TextField
							value={name}
							fullWidth
							onChange={handleSetName}
							InputProps={{
								disableUnderline: true,
								className: classes.textInput,
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
									value={gender}
									onChange={handleSetGender}
								>
									<FormControlLabel value="Perempuan" control={<Radio />} label="Perempuan" />
									<FormControlLabel value="Laki laki" control={<Radio />} label="Laki laki" />
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
								<TextField
									id="date"
									type="date"
									defaultValue={birthDate}
									className={classes.textField}
									InputProps={{
										disableUnderline: true,
										className: classes.textInput,
									}}
									onChange={handleSetBirthDate}
								/>
							</div>
						</FormControl>
					</div>
				</div>
				<hr className={classes.divider} />
				<div className={classes.sectionWrapper}>
					<Typography component="h4" className={classes.mrsHeading} variant="h7" color="textSecondary">
						Informasi Kontak
					</Typography>
					<div className={classes.flex}>
						<div className={classes.leftSide}>Alamat</div>
						<TextareaAutosize
							aria-label="minimum height"
							value={address}
							onChange={handleSetAddress}
							rowsMin={3}
							className={classes.textArea}
						/>
					</div>
					<div className={classes.flex}>
						<div className={classes.leftSide}>Kota/Kabupaten</div>
						<TextField
							value={city}
							fullWidth
							onChange={handleSetCity}
							InputProps={{
								disableUnderline: true,
								className: classes.textInput,
							}}
						/>
					</div>
					<div className={classes.flex}>
						<div className={classes.leftSide}>Nomor Ponsel</div>
						<TextField
							type="number"
							value={phoneNumber}
							fullWidth
							onChange={handleSetPhoneNumber}
							InputProps={{
								disableUnderline: true,
								className: classes.textInput,
							}}
						/>
					</div>
				</div>
			</div>
			<hr className={classes.divider} />
			<div className={classes.sectionWrapper}>
				<Typography className={classes.mrsHeading} component="h4" variant="h7" color="textSecondary">
					Informasi Jaminan
				</Typography>
				<FormControl component="fieldset">
					<div className={classes.flex}>
						<div className={classes.leftSide}>Jaminan</div>
						<Select value={payer} onChange={handleSetPayer} style={{ width: '150px' }}>
							<MenuItem value={1}>BPJS</MenuItem>
							<MenuItem value={2}>UMUM</MenuItem>
						</Select>
					</div>
				</FormControl>
				<FormControl component="fieldset">
					<div className={classes.flex}>
						<FormLabel className={classes.leftSide} component="legend"></FormLabel>
						<TextField
							id="date"
							type="date"
							defaultValue={birthDate}
							className={classes.textField}
							InputProps={{
								disableUnderline: true,
								className: classes.textInput,
							}}
							onChange={handleSetBirthDate}
						/>
					</div>
				</FormControl>
			</div>
			<div className={classes.actionWrapper}>
				<Button className={classes.actionBtn} variant="contained">
					Batal
				</Button>
				<Button className={classes.actionBtn} variant="contained" color="secondary">
					Simpan & Tambah Baru
				</Button>
				<Button variant="contained" color="primary">
					Simpan
				</Button>
			</div>
		</div>
	)
}

export default FormRegisterPatient
