import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

import {
  Card, 
  ListCategory, 
  Category 
} from './styles';

import { PostTitle, PostMiddle, PostSmall } from '../styles/typography';

const Lab = ({
    id,
    title,
    description, 
    github,
    url,
    image,
    stack
  }) => {
  return (
    <>
      <Card key={id}>
      <PostTitle>
       <PostSmall>
        <Image fluid={image} />
       </PostSmall>
       {title}
       <PostMiddle>{description}</PostMiddle>
      </PostTitle>
      <ListCategory>
        <Category>{github}</Category>
        <Category>{url}</Category>
      </ListCategory>
    </Card>
    </>
  )
}

Lab.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  stack: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Lab;