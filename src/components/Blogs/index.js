import React from 'react';

import Blog from '../Blog';
import { Section, Row, ViewLink } from '../../components/styles/element';
import { BTitle } from '../../components/styles/typography';

const Blogs = ({ blogs }) => {
  return (
    <Section>
      <Row>
        <BTitle>Últimas do blog</BTitle>
      </Row>
      {blogs.map((blog) => {
        return <Blog key={blog.id} {...blog} />
      })}
      
      <ViewLink to="/blog">Ver todos os posts</ViewLink>
    </Section>
  )
}

export default Blogs;