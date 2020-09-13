import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 40%;
  background: transparent;
  text-decoration: none;
  font-weight: 400;
  position: relative;
  border: 1px solid #202124;
  margin-bottom: .9rem;
  margin: 0 auto;

  &:before {
    content: '';
    display: block;
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
    margin-left: 0;
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