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
            <h1>Ei, Fernando</h1>
            <h4>Desenvolvedor Front-end, Netflix lover.</h4>
            <h4>Desenvolvedor Front-end, Netflix lover.</h4>
            <h4>Desenvolvedor Front-end, Netflix lover.</h4>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
   </header>
  )
}

export default Hero
