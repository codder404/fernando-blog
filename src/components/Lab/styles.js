import styled from 'styled-components';
import Image from 'gatsby-image';

export const Section = styled.section`
   
`;

export const Avatar = styled(Image)`
  height: 14rem;
`;

export const Card = styled.div`
  padding: 2rem;
  background: transparent;
  text-decoration: none;
  font-weight: 400;
  position: relative;
  border: 1px solid #202124;
  margin-bottom: .9rem;

  &:before {
    content: '';
    position: absolute;
    width: calc(1.2rem + 100%);
    height: calc(1rem + 100%);
    background: transparent;
    border-radius: .3rem;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: 66.667em) {
      width: calc(1.8rem + 100%);
      height: calc(1.4rem + 100%);
    }
  }

  @media (max-width: 41.667em) {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 66.667) {
    border-bottom: 0;
    margin: 0 0 2rem;
    flex-direction: row;
    align-items: center;
    padding: 0;

    &:hover {
      &:before {
        background: #202124;
      }
    }
  }
`;

export const ListCategory = styled.div`
  display: block;
  flex: 1;

  @media (min-width: 66.667em) {
    text-align: left;
  }
`;

export const Category = styled.p`
  display: inline-flex;
  font-weight: 500;
  background: rgba(193, 193, 193, 0.6);
  color: #FFF;
  margin-top: .7rem;
  margin-right: .2rem;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 3rem;
  border-bottom: 0;
  white-space: nowrap;
  line-height: 1;

  @media (min-width: 66.667em) {
    background: linear-gradient(transparent 0, #636e9a 0);
  }
`;

export const ListSocial = styled.div`
  width: 100%;
  margin: 0 -.35rem;  
`;

export const ItemSocial = styled.a `
  padding: .75rem 1rem .75rem 1rem;
  letter-spacing: .05em;
  margin: .5rem .35rem;
  font-weight: 500;

  display: inline-flex;
  align-items: center;
  justify-content: flex;

  cursor: pointer;
  border-radius: .5rem;
  background: rgba(0, 119, 181, .1);
  -webkit-text-fill-color: #0077b5;
  text-decoration: none;
  color: #0077b5;
  opacity: 1;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.02);
    opacity: .8;
  }

  > svg {
    fill: rgb(0,119,181);
    width: 21px;
    height: 21px;
    vertical-align: middle;
    margin-right: .5rem;
  }
    
  &.github {
    background: rgba(193, 193, 193, 0.06);
    -webkit-text-fill-color: #FFF;
    color: #FFF;
      svg {
        fill: #FFF;
      }
  }
`;