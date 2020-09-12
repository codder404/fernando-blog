import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: 850px;
  box-sizing: border-box;

  @media (min-width: 33.75em) {
    width: 80%;
    padding: 0 1.5rem;
  }
  @media (min-width: 45em) {
    padding: 0 2rem;
  }
`;

export const  Main = styled.header``;

export const  MenuTop = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 999;
  background-color: rgba(236, 239, 244, 0.8);
  backdrop-filter: blur(10px);

  @media (prefers-color-scheme: dark) {
    background-color: rgba(46, 52, 64, 0.8);
  }

  @media (prefers-color-scheme: light) {
    background-color: rgba(236, 239, 244, 0.8);
  }
    
  @media (prefers-color-scheme: no-preference) {
    background-color: rgba(236, 239, 244, 0.8);
  } 
`;

export const  Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const  Title = styled.h1`
  display: inline-block;
  visibility: visible;
  color: var(--Nerd00);
  font: 700 2rem 'Nunito';
  line-height: 2rem;
  padding: 0;
  margin: 0;
  opacity: 1;

  @media (min-width: 45em) {
    line-height: 2.75rem;
    font-size: 2.5rem;

    span {
      visibility: visible;
      font-size: 2.5rem;
      line-height: 2.75rem;
    }
  }

  @media (prefers-color-scheme: dark) {
      color: var(--Nerd06);
    }

    @media (prefers-color-scheme: light) {
        color: var(--Nerd00);
    }

    @media (prefers-color-scheme: no-preference) {
        color: var(--Nerd00);
    }
`;

export const  Span = styled.span`
  display: inline-block;
  visibility: hidden;
  line-height: 0;
  font-size: 0;
  opacity: 0;
  transition: all 300ms ease-in-out;
`;

export const  MenuLinks = styled.ul`
  display: flex;
  align-items: center;
`;

export const  ItemLinks = styled.li`
  margin: 0 5px;
`;

export const  ItemLink = styled(Link)`
  position: relative;
  display: block;
  padding: 5px;
  color: var(--Nerd03);
  font-weight: 700;
  line-height: 1.375rem;
  font-size: 1rem;
  transition: all 300ms ease-in-out;

  @media (min-width: 45em) {
    padding: 10px 5px;
    line-height: 1.5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 60em) {
    padding: 10px 15px;
  }

   &:hover, &:active, &.active,&[aria-current="page"] {
    color: var(--Nerd11);
   }

   @media (prefers-color-scheme: dark) {
    color: var(--Nerd04);
    &:hover, &:active, &.active,&[aria-current="page"] {
      color: var(--Nerd11);
    }
  }
    
  @media (prefers-color-scheme: light) {
    color: var(--Nerd03);
    &:hover, &:active, &.active,&[aria-current="page"] {
      color: var(--Nerd11);
  }
}
    
@media (prefers-color-scheme: no-preference) {
  color: var(--Nerd03);
    &:hover, &:active, &.active,&[aria-current="page"] {
      color: var(--Nerd11);
  }
}
`;