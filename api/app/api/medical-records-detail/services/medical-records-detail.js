module.exports = {
  add: async value => {
    return strapi.query('medical-records-detail').create(value)
  },
  getPatientInfoByMedicalRecordId: async id => {
    const rawBuilder = strapi.connections.default.raw(
      `select 
      mrd.visit_id,
      d.height,
      d.weight,
      d.sistole,
      d.diastole,
      d.respiratory_rate,
      d.heart_rate,
      i.code,
      i.name from medical_records_details as mrd
      inner join diagnoses as d
      on d.medical_records_detail = mrd.id
      inner join icds as i
      on i.id = d.icd
      where visit_id = ${id}`
    )
    const resp = await rawBuilder.then()
    if (resp) {
      return resp.rows
    }
    return []
  }
}
