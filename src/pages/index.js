import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';
import Social from '../components/SocialText';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Posts />
      <Social />
    </Layout>
  )
}

export default IndexPage;