import React from 'react';
import PropTypes from 'prop-types';

import { 
  Card, 
  ListCategory, 
  Category 
} from './styles';

import { PostTitle, PostMiddle, PostSmall } from '../styles/typography';

const Blog = ({ id, title, date, slug, desc, category }) => {
  return (
    <>
      <Card to={`/blogs/${slug}`} key={id}>
      <PostTitle>
       <PostSmall>{date}</PostSmall>
       {title}
       <PostMiddle>{desc}</PostMiddle>
      </PostTitle>
      <ListCategory>
       <Category>{category}</Category>
      </ListCategory>
    </Card>
    </>
  )
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Blog;