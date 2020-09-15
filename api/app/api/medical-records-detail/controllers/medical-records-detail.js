module.exports = {
  getByVisitId: async ctx => {
    const { id } = ctx.params
    return strapi.services[
      'medical-records-detail'
    ].getPatientInfoByMedicalRecordId(id)
  }
}
