import React from 'react';

import Lab from '../Lab';
import { Section } from './styles';

const Labs = ({ projects }) => {
  return (
    <Section>
     {projects.map((project, index) => {
       return <Lab key={project.id} index={index} {...project} />
     })}
    </Section>
  )
}

export default Labs;