import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';

import GlobalStyles from '../styles/globalStyle';
import { Container } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        {children}
        <Footer />
      </Container>
    </>
  )
}

export default Layout;