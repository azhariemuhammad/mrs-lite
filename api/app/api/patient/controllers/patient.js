/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils')

module.exports = {
  find: async ctx => {
    return strapi.services.patient.search(ctx.query)
  },
  create: async ctx => {
    const entity = await strapi.services.patient.add(ctx.request.body)
    return sanitizeEntity(entity, { model: strapi.models.patient })
  }
}
