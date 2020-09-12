import React from 'react';

import { 
  Card, 
  ListCategory, 
  Category 
} from './styles';

import { PostTitle, PostSmall } from '../styles/typography';

function Post() {
  return (
    <>
      <Card to="/">
      <PostTitle>
       <PostSmall>12 de setembro de 2020</PostSmall>
       Buil a Single Page Aplication
       <PostSmall>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aliquam dolore consectetur, ut accusantium omnis eveniet non magni. Repellat, consectetur nobis? Facere, nostrum. Nobis officiis, enim mollitia eligendi quasi ea.</PostSmall>
      </PostTitle>
      <ListCategory>
        <Category>React.js</Category>
        <Category>React.js</Category>
        <Category>React.js</Category>
      </ListCategory>
    </Card>

    <Card to="/">
      <PostTitle>
       <PostSmall>12 de setembro de 2020</PostSmall>
       Buil a Single Page Aplication
       <PostSmall>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In aliquam dolore consectetur, ut accusantium omnis eveniet non magni. Repellat, consectetur nobis? Facere, nostrum. Nobis officiis, enim mollitia eligendi quasi ea.</PostSmall>
      </PostTitle>
      <ListCategory>
        <Category>React.js</Category>
        <Category>React.js</Category>
        <Category>React.js</Category>
      </ListCategory>
    </Card>
    </>
  )
}

export default Post;