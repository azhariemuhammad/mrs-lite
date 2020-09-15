module.exports = {
  add: async values => {
    return strapi.query('visit').create(values)
  },
  getAll: async () => {
    const column = [
      'v.id',
      'v.department',
      'v.staff_provider',
      'v.patient',
      'v.date_visit',
      'v.chief_complain',
      'v.payer',
      'v.status_visit',
      'mr.mr_code'
    ]
    const result = await strapi
      .query('visit')
      .model.query(qb => {
        qb.select(column)
          .from('visits AS v')
          .leftJoin('medical_records AS mr', 'v.patient', 'mr.patient_id')
          .orderBy('v.date_visit', 'desc')
      })
      .fetchAll()
    if (result) {
      return result.toJSON()
    }
    return []
  }
}
