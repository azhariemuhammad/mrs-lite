const { sanitizeEntity } = require('strapi-utils')

module.exports = {
  search: async ctx => {
    return strapi.services.patient.search({ ...ctx.query })
  },
  create: async ctx => {
    const { body } = ctx.request

    const entity = await strapi.services.patient.add(body)
    const mrCode = await strapi.services['medical-record'].add({
      mr_code: body.mr_code,
      patient_id: entity.id
    })

    const data = Object.assign(entity, { mr_code: mrCode.id })

    return sanitizeEntity(data, { model: strapi.models.patient })
  }
}
