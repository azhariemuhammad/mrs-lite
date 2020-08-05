/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  search: async params => {
    const { ktp_id, mr_code, first_name } = params
    // return strapi
    //   .query('patient')
    //   .find({ ktp_id, first_name })
    //   .populate(['first_name', 'last_name'])
    const result = await strapi
      .query('medical-record')
      .model.query(qb => {
        qb.where('mr_code', mr_code)
      })
      .fetch()
    return result.toJSON()
  }
}
