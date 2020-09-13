import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Blogs from '../components/Blogs';
import Social from '../components/SocialText';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Blogs />
      <Social />
    </Layout>
  )
}

export default IndexPage;