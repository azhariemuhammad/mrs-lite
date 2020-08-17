/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  add: async value => {
    return strapi.query('medical-record').create(value)
  },
  getLastMr: async value => {
    const result = await strapi
      .query('medical-record')
      .model.query(qb => {
        qb.select(['mr.id', 'mr.mr_code'])
          .from('medical_records AS mr')
          .orderBy('mr.created_at', 'desc')
      })
      .fetch()
    if (result) {
      return result.toJSON()
    }
    return []
  }
}
