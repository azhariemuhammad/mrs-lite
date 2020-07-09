const React = require('react');
const MedicalRecordsProvider = require('./src/context/MedicalRecordsContext')
    .default;

// eslint-disable-next-line react/prop-types
exports.wrapRootElement = ({ element }) => {
    return <MedicalRecordsProvider>{element}</MedicalRecordsProvider>;
};
