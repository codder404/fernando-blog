import styled from 'styled-components';
import { Link } from 'gatsby';

export const Header = styled.header`
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem 0;
  z-index: 2;
  background: #161616;
  width: 100%;
  position: static;
  line-height: 2rem;

  @media (min-width: 66.667em) {
    margin: 1.6rem 0;
    padding: 1.2rem 0;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  padding: .6rem;
  margin: 0 .25rem;
  color: rgba(0,0,0,.7);
  border-bottom: none;
  border-radius: .3rem;
  font-weight: 400;
  font-size: .95rem;
  margin-left: -1rem;

  @media (min-width: 66.667em) {
    font-size: 1.3rem;
    margin-right: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFF;
  white-space: nowrap;
  background: transparent;

  @media (min-width: 66.667em) {
    font-size: 1.6rem;
  }
`;

export const MenuLinkList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const MenuLinksItems = styled.li`
  padding: 0.5rem 0;

  .active {
    background: #202124;
  }

  &:last-of-type {
    margin-right: -.6rem;

    @media (min-width: 66.667em) {
      margin-right: 0;
    }
  }
`;

export const MenuLinkItem = styled(Link)`
  background: transparent;
  text-decoration: none;
  border-radius: .3rem;
  padding: .6rem;
  margin: 0 .25rem;
  color: rgba(0,0,0,.7);
  border-bottom: none;
  font-weight: 400;
  font-size: .95rem;
  color: #FFF;

  &:hover {
    background: #202124;
  }

  @media (min-width: 66.667em) {
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }
`;