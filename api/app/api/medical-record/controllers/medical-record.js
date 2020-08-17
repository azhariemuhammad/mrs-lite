/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  getLastMr: async ctx => {
    const entity = await strapi.services['medical-record'].getLastMr()
    return entity
  }
}
