import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql `
    {
      file(relativePath: {eq: "hero-img.jpg"}) {
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
            <p>Meu nome é Fernando dos Santos. Trabalho como Desenvolvedor</p>
            <p>Front-end. Entusiasta de projetos Open Source, acredito que a</p>
            <p>partilha do conhecimento e de boas idéias, torna o mundo um </p>
            <p>lugar melhor.</p>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
   </header>
  )
}

export default Hero
