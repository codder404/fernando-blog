import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Blogs from '../components/Blogs';
import SEO from '../components/SEO';

const BlogPage = ({ data: {
  allStrapiBlogs: { nodes: blogs },
},

}) => {
  return (
    <Layout>
      <SEO title="Blog" description="My Personal Site" />
      <Blogs blogs={blogs} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        id
        desc
        date(formatString: "DD MMM YY")
        slug
        title
        stack {
          id
          text
        }
      }
    }
  }
`;


export default BlogPage;