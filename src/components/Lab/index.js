import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Chrome } from '@styled-icons/boxicons-logos/Chrome';

import {
  Card, 
  ListCategory, 
  Category,
  ListSocial,
  ItemSocial 
} from './styles';

import { PostTitle, PostMiddle } from '../styles/typography';

const Lab = ({
    title,
    description, 
    github,
    url,
    image,
    stack,
    index
  }) => {
  return (
    <>
      <Card>
      <PostTitle>
        <Image fluid={image.childImageSharp.fluid} />
       0{index + 1}
       {title}
       <PostMiddle>{description}</PostMiddle>
      </PostTitle>
      <ListSocial>
        <ItemSocial className={"github"} href={github} title="GitHub">
          <Github />
        </ItemSocial>
      
        <ItemSocial className={"chrome"} href={url} title="Site">
         <Chrome />
        </ItemSocial>
      </ListSocial>

      <ListCategory>
        {stack.map((item) => {
          return (
            <Category key={item.id}>
              {item.text}
            </Category>
          )
        })}
      </ListCategory>
    </Card>
    </>
  )
}

Lab.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  stack: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Lab;