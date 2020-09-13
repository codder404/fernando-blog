import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { Title, Text } from '../components/styles/typography';
import { SectionAbout } from '../components/styles/element';

const Hi = ({ data: { about: { nodes } } }) => {
  const { info, title } = nodes[0];

  return (
    <Layout>
      <SEO title="About me" />
        <SectionAbout>
          <Title>{title}</Title>
          <Text>{info}</Text>
        </SectionAbout>
    </Layout>
  )
}

export const query = graphql `
  {
    about: allStrapiAbout {
      nodes {
        title
        info
      }
    }
  }
`;

export default Hi;