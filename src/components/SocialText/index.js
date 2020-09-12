import React from 'react';

import SocialMidia from '../SocialMidia';

import { Title, Text } from '../styles/typography';
import { Section, Row, Contact, Left } from '../styles/element';

const SocialText = () => {
  return (
    <Section>
      <Row className={"marginBottom"}>
        <Title>Follow me!</Title>
      </Row>
      <Contact>
        <Left>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati repellendus maxime reiciendis, amet quos nihil consequuntur autem harum magni explicabo optio neque ducimus atque debitis similique odio, facilis earum.
          </Text>
          <SocialMidia />
        </Left>
      </Contact>
    </Section>
  )
}

export default SocialText;