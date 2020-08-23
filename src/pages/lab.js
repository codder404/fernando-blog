import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Labs from '../components/Lab';

function Lab() {
  return (
    <Layout>
      <SEO title="Lab" description="Meu laboratório de projetos" />
      <section className="">
       <Labs />
      </section>
    </Layout>
  )
}

export default Lab;