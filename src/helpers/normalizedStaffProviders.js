export const normalizedStaffProviders = data => {
  if (data.length < 1) return []

  const normalized = data.map(item => {
    const user = item?.user || {}
    const staffFn = user.first_name
    const staffLn = user.last_name
    const postSalutation = user?.post_salutation || ''
    const preSalutation = user?.pre_salutation || ''
    return {
      id: item.id,
      staff_type: item?.staff_type.name || '',
      fullName: `${preSalutation} ${staffFn} ${staffLn} ${postSalutation}`,
      staffFn,
      staffLn
    }
  })

  return normalized
}
