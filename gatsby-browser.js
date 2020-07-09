import React from 'react';
import { MedicalRecordsProvider } from './src/context/MedicalRecordsContext';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
    return <MedicalRecordsProvider>{element}</MedicalRecordsProvider>;
};
