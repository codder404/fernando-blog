import React from 'react';

import { Container, Section } from './styles';
import { Title, Text } from '../styles/typography';

const Hero = () => {
  return (
    <Container>
      <Section>
        <Title style={{marginBottom: "1rem"}}>Hi There!</Title>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit architecto quae nobis reprehenderit laudantium sit quidem similique iusto! Maiores voluptas mollitia beatae praesentium at accusantium similique quibusdam illum reiciendis.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit architecto quae nobis reprehenderit laudantium sit quidem similique iusto! Maiores voluptas mollitia beatae praesentium at accusantium similique quibusdam illum reiciendis.</Text>
      </Section>
    </Container>
  )
}

export default Hero;