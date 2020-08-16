const SEX = ['none', 'laki-laki', 'perempuan']

export const normalizedVisits = data => {
  if (data.length < 1) return []

  const normalized = data.map(item => {
    const patient = item.patient
    return {
      id: item.id,
      name: `${patient?.first_name || ''} ${patient?.last_name || ''}`,
      gender: SEX[patient.sex] || '-',
      birthDate: patient.birth_of_date,
      address: patient.street_name,
      city: patient.city,
      phoneNumber: patient.phone,
      payer: item.payer.type,
      poli: item.department.name,
      medRecoredNumber: item.mr_code,
      chiefComplaint: item.chief_complain,
      dateVisit: item.date_visit
    }
  })

  return normalized
}
