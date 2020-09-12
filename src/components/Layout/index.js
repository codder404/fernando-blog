import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
// import Footer from '../Footer';

import { GlobalStyle, Container, Main } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
      {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;