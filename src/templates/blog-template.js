import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { Section } from './styles';

const BlogTemplate = ({ data }) => {
  const { content, title, desc } = data.blog;

  return (
    <Layout>
     <SEO title={title} description={desc} />
      <Section>
        <ReactMarkdown source={content} />
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc  
    }
  }
`;

export default BlogTemplate;