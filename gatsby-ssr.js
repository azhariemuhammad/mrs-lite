const React = require('react')
const MedicalRecordsProvider = require('./src/context/MedicalRecordsContext')

exports.wrapRootElement = ({ element }) => {
	return <MedicalRecordsProvider>{element}</MedicalRecordsProvider>
}
