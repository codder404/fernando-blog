import React from "react";
import { Link } from 'gatsby';

import labs from "../../constants/lab";
import './styles.css';

const Lab = () => {
  return (
    <section className="section">
      <div className="section-center labs-center">
        {labs.map(lab => {
          const { id, image, title, text, link } = lab;

          return (
            <article key={id} className="lab">
              {image}
              <h4>{title}</h4>
              <p>{text}</p>
              {link}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Lab;
