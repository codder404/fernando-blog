import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header';
// import Footer from '../Footer';

import { GlobalStyle, Container, Main } from './styles';

const Layout = ({ children }) => {
  <StaticQuery query={graphql`
    query SiteHomeTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `} render={data => {
    <>
      <GlobalStyle />
      <Header siteTilte={data.site.siteMetadata.title} />
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
      {/* <Footer /> */}
    </>
  }} 

  />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;