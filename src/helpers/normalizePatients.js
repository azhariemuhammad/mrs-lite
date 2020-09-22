const SEX = ['laki-laki', 'perempuan']

export const normalizePatient = data => {
  if (data.length < 1) return []

  const normalized = data.map(item => {
    return {
      id: item.id,
      name: `${item?.first_name || ''} ${item?.last_name || ''}`,
      gender: SEX[item.sex] || '-',
      dob: item.date_of_birth,
      address: item.street_name,
      city: item.city,
      phoneNumber: item.phone,
      medRecoredNumber: item.mr_code,
      headOfHousehold: item.head_of_household || '',
      medRecoredId: item.mr_id
    }
  })

  return normalized
}
