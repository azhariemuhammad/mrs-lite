module.exports = {
  add: async value => {
    return strapi.query('medical-records-detail').create(value)
  }
}
