import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

// import Header from '../Header';
// import Hero from '../Hero'; 
// import Footer from '../Footer';

import { GlobalStyle, Container, Main } from './styles';

const Home = ({ children }) => {
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
      {/* <Header siteTilte={data.site.siteMetadata.title} /> */}
      {/* <Hero /> */}
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

Home.propTypes = {
  children: PropTypes.node.isRequired
}

export default Home;