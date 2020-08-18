const React = require('react')
const MedicalRecordsProvider = require('./src/context/MedicalRecordsContext')
  .default

const PatientsProvider = require('./src/context/PatientsContext').default
// eslint-disable-next-line react/prop-types
exports.wrapRootElement = ({ element }) => {
  return (
    <MedicalRecordsProvider>
      <PatientsProvider>{element}</PatientsProvider>
    </MedicalRecordsProvider>
  )
}
