import React from "react";

import labs from "../constants/lab";

const Lab = () => {
  return (
    <section className="section">
      <div className="section-center labs-center">
        {labs.map(lab => {
          const { id, image, title, text } = lab;

          return (
            <article key={id} className="lab">
              {image}
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Lab;
