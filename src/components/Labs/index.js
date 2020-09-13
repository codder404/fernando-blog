import React from 'react';

import Lab from '../Lab';
import { Section, Row } from '../../components/styles/element';
import { BTitle } from '../../components/styles/typography';

const Labs = () => {
  return (
    <Section>
      <Row>
        <BTitle>Projetos</BTitle>
        <Lab />
      </Row>
    </Section>
  )
}

export default Labs;