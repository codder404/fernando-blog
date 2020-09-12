import React from 'react';
import { graphql } from 'gatsby';
import { Image } from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Social from '../components/SocialText';

import { Title, Text } from '../components/styles/typography';
import { Row, Right, Left } from '../components/styles/element';

export function About ({ data: { about: { nodes } } }) {
  const { info, title, image } = nodes[0];

  return (
    <Layout>
      <SEO title="About me" />
      <Row>
        <Left>
          <Image fluid={image.childImageSharp.fluid} />
        </Left>
        <Right>
          <Title>{title}</Title>
          <Text>{info}</Text>
        </Right>
      </Row>
      <Social />
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title 
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        } 
      }
    }
  }
`;