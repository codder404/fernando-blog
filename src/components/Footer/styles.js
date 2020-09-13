import styled from 'styled-components';

export const Foo = styled.footer`
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  align-items: center;
  justify-content: center;
  background: #161616;
  position: static;
  width: 100%;
  z-index: 2;
  left: 0;
  top: 0;
    
  @media screen and (min-width: 66.667em) {
    margin: .2rem 0;
    padding: 1.2rem 0;
  }
`;

export const Copy = styled.p`
  color: #949495;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 1.2rem 0;
  text-align: center;
    
  @media screen and (min-width: 66.667em) {
    margin: 1.5rem 0;
  }
`;

export const CopyLink = styled.a`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  text-decoration: none;
  background: transparent;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  cursor: pointer;
    
  @media screen and (min-width: 66.667em) {
    margin: 0;
  }
`;