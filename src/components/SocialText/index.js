import React from 'react';

import SocialMidia from '../SocialMidia';

import { Section } from './styles';
import { Title, Text } from '../styles/typography';
import { Row, Contact, Left } from '../styles/element';

const SocialText = () => {
  return (
    <Section>
      <Row className={"marginBottom"}>
        <Title>Follow me!</Title>
      </Row>
      <Contact>
        <Left>
          <Text>
             Talk to me through my social networks, no need
             to worry because I will get back to you as soon as possible.
          </Text>
          <SocialMidia />
        </Left>
      </Contact>
    </Section>
  )
}

export default SocialText;