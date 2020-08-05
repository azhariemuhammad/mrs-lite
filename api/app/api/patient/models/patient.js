/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  afterCreate: (model, attrs, options) => {
    console.log(model, attrs, options)
  }
}
