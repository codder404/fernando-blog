import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column-reverse;
  margin-top: 2rem;
  margin-bottom: 3.5rem;

  @media (min-width: 66.667em) {
    margin-bottom: 4rem;
    align-items: center;
    flex-direction: row;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 66.667em) {
    margin-right: 2.5rem;
  }
`;