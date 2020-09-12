import React from 'react';

import { Container, Section } from './styles';
import { Title, Text } from '../styles/typography';

const Hero = () => {
  return (
    <Container>
      <Section>
        <Title style={{marginBottom: "1rem"}}>Hi There!</Title>
        <Text>Front-End Developer!</Text>
      </Section>
    </Container>
  )
}

export default Hero;