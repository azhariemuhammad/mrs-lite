import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Vitals from 'components/Vitals/Vitals'

function VitalsPage({ location }) {
	const pageTitle = 'Pemeriksaan Vital pasien'
	return (
		<Layout location={location} title={pageTitle}>
			<Vitals />
		</Layout>
	)
}
VitalsPage.propTypes = {
	location: PropTypes.object,
}
export default VitalsPage
