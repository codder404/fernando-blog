import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Labs from '../components/Labs';

const LabPage = () => {
  return (
    <Layout>
      <SEO title="Lab" />
      <Labs />
    </Layout>
  )
}

export default LabPage;