module.exports = {
  search: async params => {
    const column = [
      'first_name',
      'last_name',
      'sex',
      'birth_of_date',
      'city',
      'district',
      'street_name',
      'phone'
    ]
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
      .fetch()
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
      phone
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
      phone
    })
  }
}
