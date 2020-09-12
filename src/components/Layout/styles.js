import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1150px;
  padding: 0 1.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media (min-width: 66.667em) {
    padding: 0 2rem;
  }
`;
