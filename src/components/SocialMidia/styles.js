import styled from 'styled-components';

export const ListSocial = styled.div `
  width: 100%;
  margin: 0 -.35rem;  
`;

export const ItemSocial = styled.a`
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

  &.instagram {
    background: rgba(193, 193, 193, 0.06);
    -webkit-text-fill-color: #FFF;
    color: #FFF;
      svg {
        fill: #FFF;
      }
  }
    
  &.twitter {
    background: rgba(0, 168, 255, .04);
    -webkit-text-fill-color: #00a8ff;
    color: #00a8ff;
      svg {
        fill: rgb(0, 168, 255);
      }
  }
    
  &.linkedin {
    background: rgba(0, 168, 255, .04);
    -webkit-text-fill-color: #00a8ff;
    color: #00a8ff;
      svg {
        fill: rgb(0, 168, 255);
      }
  }
    
  &.github {
    background: rgba(193, 193, 193, 0.06);
    -webkit-text-fill-color: #FFF;
    color: #FFF;
      svg {
        fill: #FFF;
      }
  }
    
  &.telegram {
    background: rgba(0, 168, 255, .04);
    -webkit-text-fill-color: #00a8ff;
    color: #00a8ff;
      svg {
        fill: rgb(0, 168, 255);
    }
  }
`;