import styled from 'styled-components'

const ButtonContainer = styled.div`
  //=========== BULMA CSS CODE ===========//
  padding: 3rem 1.5rem;

  & div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    flex-wrap: wrap;

    &:last-child {
      margin-bottom: -0.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`

export default ButtonContainer
