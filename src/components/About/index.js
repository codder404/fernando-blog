import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../Layout";
import Title from "../Title";
import SEO from '../SEO';

import './styles.css';

const About = ({ data: { about: { nodes } } }) => {
  const { info, title, image } = nodes[0];

  return (
    <Layout>
      <SEO title="Sobre" description="Sobre Fernando dos Santos"/>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default About;