import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Blogs from '../components/Blogs';
import Social from '../components/SocialText';
import SEO from '../components/SEO';

export default ({ data }) => {
  const { allStrapiBlogs: { nodes: blogs } } = data;

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Blogs blogs={blogs} />
      <Social />
    </Layout>
  )
}

export const query = graphql `
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        desc
        date(formatString: "DD MM YY")
        id
        title
        stack {
          id
        }
      }
    }
  }
`