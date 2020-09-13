import React from 'react';

import { Container, Section } from './styles';
import { Title, Text } from '../styles/typography';

const Hero = () => {
  return (
    <Container>
      <Section>
        <Title style={{marginBottom: "1rem"}}>Hi There!</Title>
        <Text>
          My name is Fernando dos Santos from Angola. I've been working as Front-End Developer since 2017. I'm passionate about open source projects, I believe that the dissemination of knowledge and good ideas inspires and improves the world.

          Currently, I'm a Front-end Developer at Paga3. I'm focused on Front-end Development and user experience, I like to play with CSS, I'm always testing new things.
        </Text>
      </Section>
    </Container>
  )
}

export default Hero;