const React = require('react');
const MedicalRecordsProvider = require('./src/context/MedicalRecordsContext');

exports.wrapRootElement = ({ element }) => {
    return <MedicalRecordsProvider>{element}</MedicalRecordsProvider>;
};

// import React from 'react';
// import MedicalRecordsProvider from './src/context/MedicalRecordsContext';

// const wrapRootElement = ({ element }) => {
//     return <MedicalRecordsProvider>{element}</MedicalRecordsProvider>;
// };

// export default wrapRootElement;
