module.exports = {
  add: async ctx => {
    const { body } = ctx.request
    let entity
    if (Array.isArray(body)) {
      entity = await Promise.all(
        body.map(val => {
          return strapi.services.diagnose.create(val)
        })
      )
    } else {
      entity = await strapi.services.diagnose.create(body)
    }
    return entity
  }
}
