// import React, { useState } from 'react'
// import { node } from 'prop-types'

// import fetchRequest from '../helpers/fetchRequest'

// export const MedicalRecordsDetailContext = React.createContext()

// export const MedicalRecordsDetailProvider = ({ children }) => {
//   const getMedicalRecordByVisitId = async visitId => {
//     const res = await fetchRequest(
//       {},
//       `medical-records-by-visit/${visitId}`,
//       'GET'
//     )
//     return res
//   }
//   return (
//     <MedicalRecordsDetailContext.Provider value={{ getMedicalRecordByVisitId }}>
//       {children}
//     </MedicalRecordsDetailContext.Provider>
//   )
// }

// MedicalRecordsDetailProvider.propTypes = {
//   children: node.isRequired
// }

// // eslint-disable-next-line react/prop-types
// export default ({ element }) => (
//   <MedicalRecordsDetailProvider>{element}</MedicalRecordsDetailProvider>
// )
