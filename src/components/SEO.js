import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql `
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteUrl
        image
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername
  } = site.siteMetadata;

  return (
    <Helmet htmlAttributes={{lang:"pt-BR"}} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl} ${image}`} />
    </Helmet>
  )
}

export default SEO;