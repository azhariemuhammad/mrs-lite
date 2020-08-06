const { sanitizeEntity } = require('strapi-utils')

module.exports = {
  create: async ctx => {
    const entity = await strapi.services.visit.add(ctx.request.body)
    return sanitizeEntity(entity, { model: strapi.models.visit })
  }
}
