import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

import SocialLink from "../constants/socialLinks";

const query = graphql `
    {
      file(relativePath: {eq: "fernando.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const Hero = () => {
  const { file:
    { childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>Olá!</h1>
            <p>
              Meu nome é Fernando dos Santos. Trabalho como Desenvolvedor
              Front-end. Entusiasta de projetos Open Source, acredito que a
              partilha do conhecimento e de boas idéias, torna o mundo um
              lugar melhor.
            </p>
            <SocialLink />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
   </header>
  )
}

export default Hero
