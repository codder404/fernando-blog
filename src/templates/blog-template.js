import React from "react";
import { graphql, Link } from "gatsby";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import './styles.css';

const ComponentName = ({ data }) => {
  const { content, title, desc } = data.blog;

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-center">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
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
`

export default ComponentName;
