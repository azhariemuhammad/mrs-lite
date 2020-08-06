module.exports = {
  add: async values => {
    return strapi.query('visit').create(values)
  }
}
