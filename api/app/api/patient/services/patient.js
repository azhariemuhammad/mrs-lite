const column = [
  'p.id',
  'p.first_name',
  'p.last_name',
  'p.sex',
  'p.date_of_birth',
  'p.city',
  'p.district',
  'p.street_name',
  'p.ktp_id',
  'p.phone',
  'mr.mr_code'
]

module.exports = {
  search: async params => {
    const val = {}
    if (params.phone) {
      val.phone = params.phone
    }
    if (params.ktp_id) {
      val.ktp_id = params.ktp_id
    }
    const result = await strapi
      .query('patient')
      .model.query(qb => {
        const query = qb
          .select(column)
          .from('patients AS p')
          .join('medical_records AS mr', 'p.id', '=', 'mr.patient_id')
        if (params.first_name) {
          query.where('p.first_name', 'ilike', `%${params.first_name}%`)
          query.andWhere(val)
        } else {
          query.where(val)
        }
      })
      .fetchAll()
    if (result) {
      return result.toJSON()
    }
    return []
  },
  add: async values => {
    const {
      first_name,
      last_name,
      sex,
      street_name,
      district,
      ktp_id,
      degree,
      city,
      phone,
      date_of_birth
    } = values

    return strapi.query('patient').create({
      first_name,
      last_name,
      sex,
      street_name,
      district,
      ktp_id,
      degree,
      city,
      phone,
      date_of_birth
    })
  }
}
