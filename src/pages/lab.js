import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Labs from '../components/Labs';

const LabPage = ({ data: { 
  allStrapiProjects: {nodes:projects},
}

}) => {
  return (
    <Layout>
      <SEO title="Lab" />
      <Labs projects={projects} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        description
        github
        url
        image {
          childImageSharp {
            fluid {
             ...GatsbyImageSharpFluid
            }
          }
        }
        title
        stack {
          id
          text
        }
      }
    }
  }
`;

export default LabPage;