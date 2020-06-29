import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Blogs from "../components/Blogs";

export default ({ data }) => {
  const { allStrapiBlogs: { nodes: blogs } } = data;

  return (
    <Layout>
      <Hero />
      <Services />
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
