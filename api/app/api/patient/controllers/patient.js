const { sanitizeEntity } = require('strapi-utils')

module.exports = {
  search: async ctx => {
    return strapi.services.patient.search({ ...ctx.query })
  },
  create: async ctx => {
    const { body } = ctx.request

    const entity = await strapi.services.patient.add(body)
    await strapi.services['medical-record'].add({
      mr_code: body.mr_code,
      patient_id: entity.id
    })

    return sanitizeEntity(entity, { model: strapi.models.patient })
  }
}
