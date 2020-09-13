import React from 'react';
import PropTypes from 'prop-types';

import { 
  Card, 
  ListCategory, 
  Category 
} from './styles';

import { PostTitle, PostMiddle, PostSmall } from '../styles/typography';

const Lab = () => {
  return (
    <>
      <Card to="/">
      <PostTitle>
       <PostSmall>Image</PostSmall>
       title
       <PostMiddle>descrição</PostMiddle>
      </PostTitle>
      <ListCategory>
        <Category>Url</Category>
      </ListCategory>
    </Card>
    </>
  )
}

Lab.propTypes = {
  
}

export default Lab;