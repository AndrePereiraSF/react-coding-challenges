import styled from 'styled-components'

const ColumnContainer = styled.div`
  //=========== BULMA CSS CODE ===========//

  display: flex;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;

  &:not(:last-child) {
    margin-bottom: calc(1.5rem - 0.75rem);
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export default ColumnContainer
