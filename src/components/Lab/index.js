import React from 'react';
import PropTypes from 'prop-types';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Chrome } from '@styled-icons/boxicons-logos/Chrome';

import {
  Section,
  Card, 
  ListCategory, 
  Category,
  ListSocial,
  ItemSocial,
  Avatar 
} from './styles';

import { PostTitle, PostMiddle } from '../styles/typography';

const Lab = ({
    title,
    description, 
    github,
    url,
    image,
    stack
  }) => {
  return (
    <Section>
      <Card>
        <Avatar fluid={image.childImageSharp.fluid} />
        <PostTitle>
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
    </Section>
  )
}

Lab.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Lab;