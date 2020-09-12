import React from 'react';
import { Link } from 'gatsby';

import { 
  Container, 
  Main, 
  MenuTop, 
  Nav, 
  Title, 
  Span, 
  MenuLinks, 
  ItemLinks, 
  ItemLink 
} from './styles';

const Header = () => {
  return (
    <Main>
      <MenuTop>
        <Container>
          <Nav>
            <Link to="/" title={"Fernando"} className={"title"}>
              <Title>F<Span>ernando</Span></Title>
            </Link>
            <MenuLinks>
              <ItemLinks>
                <ItemLink to="/" title={"Home"}>Home</ItemLink>
              </ItemLinks>
               <ItemLinks>
                <ItemLink to="/hi" title={"Hi"}>Hi</ItemLink>
              </ItemLinks>
               <ItemLinks>
                <ItemLink to="/lab" title={"Lab"}>Lab</ItemLink>
              </ItemLinks>
            </MenuLinks>
          </Nav>
        </Container>
      </MenuTop>
    </Main>
  )
}

export default Header;