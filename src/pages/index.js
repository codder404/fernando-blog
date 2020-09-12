import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Posts />
    </Layout>
  )
}

export default IndexPage;