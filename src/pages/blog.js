import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Blogs from "../components/Blogs";

const Blog = ({ data: {
  allStrapiBlogs: { nodes: blogs },
},
  
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="Blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
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

export default Blog
