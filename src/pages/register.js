import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import RegisterContent from 'components/RegisterContent';

function RegisterPage({ location }) {
    const pageTitle = location ? location.pathname.replace(/\//g, '') : '';
    return (
        <Layout location={location} title={pageTitle}>
            <RegisterContent />
        </Layout>
    );
}
RegisterPage.propTypes = {
    location: PropTypes.shape({ pathname: {} }).isRequired
};
export default RegisterPage;
