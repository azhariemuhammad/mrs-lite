const SEX = ['laki-laki', 'perempuan']

export const normalizePatient = data => {
  if (data.length < 1) return []

  const normalized = data.map(item => {
    console.log(item)
    return {
      name: `${item.first_name} ${item.last_name}`,
      gender: SEX[item.sex] || '-',
      birthDate: item.birth_of_date,
      address: item.street_name,
      city: item.city,
      phoneNumber: item.phone,
      payer: 'BPJS',
      poli: 'Poli Umum',
      medRecoredNumber: item.mr_code,
      chiefComplaint: 'Sakit Perut'
    }
  })

  return normalized
}
