import React from 'react';

import Post from '../Post';
import { Section, Row, ViewLink } from '../../components/styles/element';
import { BTitle } from '../../components/styles/typography';

const Posts = () => {
  return (
    <Section>
      <Row>
        <BTitle>Últimas do blog</BTitle>
      </Row>
      <Post />
      <ViewLink>View All</ViewLink>
    </Section>
  )
}

export default Posts;