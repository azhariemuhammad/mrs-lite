import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import PatientList from 'components/PatientList'

function PatientListPage({ location }) {
	const pageTitle = 'Daftar Pasien'
	return (
		<Layout location={location} title={pageTitle}>
			<PatientList />
		</Layout>
	)
}
PatientListPage.propTypes = {
	location: PropTypes.object,
}
export default PatientListPage
