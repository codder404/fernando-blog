import React from 'react';

import Lab from '../Lab';

const Labs = ({ projects }) => {
  return (
    <>
     {projects.map((project, index) => {
       return <Lab key={project.id} index={index} {...project} />
     })}
    </>
  )
}

export default Labs;