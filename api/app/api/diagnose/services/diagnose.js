module.exports = {
  create: async value => {
    return strapi.query('diagnose').create(value)
  }
}
