import React from "react";

import Title from "./Title";
import labs from "../constants/lab";
import Lab from "../pages/lab";

const Lab = () => {
  return (
    <section className="section bg-grey">
      <Title title="Serviços" />
      <div className="section-center services-center">
        {labs.map(lab => {
          const { id, icon, title, text } = lab;

          return (
            <article key={id} className="service">
              {icon}
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
