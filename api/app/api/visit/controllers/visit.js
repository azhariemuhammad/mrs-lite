const { sanitizeEntity } = require('strapi-utils')

module.exports = {
  create: async ctx => {
    const { body } = ctx.request
    const entity = await strapi.services.visit.add(body)
    await strapi.services['medical-records-detail'].add({
      medical_record_id: body.mr_code_id,
      visit_id: entity.id
    })
    return sanitizeEntity(entity, { model: strapi.models.visit })
  },
  getAll: async ctx => {
    return strapi.services.visit.getAll({ ...ctx.query })
  }
}
