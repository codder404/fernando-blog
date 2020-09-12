import React from 'react';

import menuLinks from './content';

import { 
  Navbar, 
  HomeLink, 
  Title,
  MenuLinkList, 
  MenuLinksItems, 
  MenuLinkItem 
} from './styles';

const Navbar = () => {
  return (
    <Header>
      <HomeLink to="/">
        <Title>
          <span className="icon" role="img" aria-label="iduck">🦆</span>
          Fernando
        </Title>
      </HomeLink>
      <MenuLinkList>
        {menuLinks.map(({url, label}, j) => (
          <MenuLinksItems key={j}>
            <MenuLinkItem
              to={url}
            >
              {label}
            </MenuLinkItem>
          </MenuLinksItems>
        ))}
      </MenuLinkList>
    </Header>
  )
}

export default Navbar;