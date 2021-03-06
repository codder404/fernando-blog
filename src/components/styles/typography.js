import styled from "styled-components"

export const Title = styled.p `
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (min-width: 66.667em) {
    font-size: 1.8rem;
    line-height: 1.1;
  }

  &.margin {
    margin-bottom: 1.2rem;

    @media (min-width: 66.667em) {
      margin-bottom: 1.5rem;
    }
  }
`;

export const BTitle = styled.h2 `
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.2;
  margin-left: 8.4em;
  margin-bottom: 1em;

  @media (min-width: 66.667em) {
    font-size: 1.8rem;
    line-height: 1.1;
  }

  @media (max-width: 41.667em) {
    margin-left: 0;
  }

  &.margin {
    margin-bottom: 1.2rem;

    @media (min-width: 66.667em) {
      margin-bottom: 1.5rem;
    }
  }
`

export const Text = styled.p `
  color: #949495;
  font-size: 1.4rem;
  font-weight: 400;
  width: 30em;

  @media (max-width: 41.667em) {
    width: 100%;
  }
`

export const PostTitle = styled.p `
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 400;
  color: #fff;
  margin-bottom: 1.2rem;

  @media (min-width: 66.667em) {
    margin-bottom: 0;
    flex: 3;
  }

  &.member {
    flex: 1;

    @media (min-width: 66.667em) {
      flex: 1;
    }
  }
`

export const PostSmall = styled.small `
  color: #949495;
  font-size: 0.8rem;
  font-weight: 400;
`

export const PostMiddle = styled.small `
  color: #949495;
  font-size: 0.8rem;
  font-weight: 400;
`

export const MemberDate = styled.p `
  color: #949495;
  font-size: 1.1rem;
  font-weight: 400;
`

export const MemberDetails = styled.p `
  color: #949495;
  font-size: 1.1rem;
  font-weight: 400;

  @media (min-width: 66.667em) {
    flex: 3;
  }
`
