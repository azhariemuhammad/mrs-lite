const column = [
  'first_name',
  'last_name',
  'sex',
  'date_of_birth',
  'city',
  'district',
  'street_name',
  'phone',
  'mr_code'
]

module.exports = {
  search: async params => {
    const val = {}
    if (params.first_name) {
      val.first_name = params.first_name
    }
    if (params.ktp_id) {
      val.ktp_id = params.ktp_id
    }

    const result = await strapi
      .query('patient')
      .model.query(qb => {
        qb.column(column)
          .join(
            'medical_records',
            'patients.id',
            '=',
            'medical_records.patient_id'
          )
          .where(val)
      })
      .fetchAll()
    if (result) {
      console.log(result)
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
