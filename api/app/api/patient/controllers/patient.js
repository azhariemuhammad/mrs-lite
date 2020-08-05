/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: async ctx => {
    console.log(ctx.query)

    if (ctx.query) {
      return strapi.services.patient.search(ctx.query)
    }
    return 'fooo'
  }
}
