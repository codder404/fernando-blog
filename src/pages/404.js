import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>Ops!!</h1>
    </Layout>
  )
}

export default NotFoundPage;