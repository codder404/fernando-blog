import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Lab from '../components/Lab';

function Lab() {
  return (
    <Layout>
      <SEO title="Lab" description="Meu laboratório de projetos" />
      <section className="">
       <Lab />
      </section>
    </Layout>
  )
}

export default Lab;