import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Blogs from "../components/Blogs";
import SEO from '../components/SEO';

export default ({ data }) => {
  const { allStrapiBlogs: { nodes: blogs } } = data;

  return (
    <Layout>
      <SEO title="Home" description="Página principal do blog" />
      <Hero />
      <Blogs blogs={blogs} title="Últimas do blog" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "Do MMM, YY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
