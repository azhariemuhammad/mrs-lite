export function calculateAge(dob) {
  const diff_ms = Date.now() - dob.getTime()
  const age_dt = new Date(diff_ms)
  const ageMonth = age_dt.getUTCMonth()
  const ageDate = age_dt.getUTCDate()
  const ageYear = age_dt.getUTCFullYear()
  return `${ageYear - 1970}Y ${ageMonth}M ${ageDate}D`
}
