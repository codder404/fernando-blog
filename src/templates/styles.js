import styled from 'styled-components';

export const Section = styled.section`
  width: 60%;
  margin: 0 auto;
  margin-top: 7rem;

  > img {
    width: 100vh;
  }

  > h1 {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.2;
      margin-bottom: 1rem;

      @media (min-width: 66.667em) {
        font-size: 3rem;
        line-height: 1.1;
      }

      &.margin {
        margin-bottom: 1.2rem;

        @media (min-width: 66.667em) {
          margin-bottom: 1.5rem;
        }
      }
    }

    > h2 {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.2;
      margin-bottom: 1rem;
      color: #949495;

      @media (min-width: 66.667em) {
        font-size: 2rem;
        line-height: 1.1;
      }

      &.margin {
        margin-bottom: 1.2rem;

        @media (min-width: 66.667em) {
          margin-bottom: 1.5rem;
        }
      }
    }

    > h3 {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.2;
      margin-bottom: 1rem;
      color: #949495;

      @media (min-width: 66.667em) {
        font-size: 1.5rem;
        line-height: 1.1;
      }

      &.margin {
        margin-bottom: 1.2rem;

        @media (min-width: 66.667em) {
          margin-bottom: 1.5rem;
        }
      }
    }

    > p > strong {
      background: #2d2d2d;
      color: rgba(255,255,255, .9);
      padding: 0.3em 0.3em 0.2em;
      box-shadow: none;
    }

  > p {
      color: #FFF;
      font-size: 1.3rem;
      font-weight: 400;
      margin-bottom: 1rem;
  }

  > p > a {
      color: #a1ecf7;
      font-size: 1.1rem;
      font-weight: 400;
      margin: 0;
      text-decoration: none;
      background: transparent;
      text-decoration: none;
      display: inline-block;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid #a1ecf7;
      }
    
      @media screen and (min-width: 66.667em) {
        margin: 0;
      }
  }
`;