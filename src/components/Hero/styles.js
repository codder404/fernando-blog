import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column-reverse;
  margin-top: 2rem;

  @media (min-width: 66.667em) {
    margin-bottom: 4rem;
    align-items: center;
    flex-direction: row;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 12em;

  @media (min-width: 66.667em) {
    margin-right: 2.5rem;
  }

 @media (max-width: 41.667em) {
    width: 100%;
    margin-left: 0;
  }
`;