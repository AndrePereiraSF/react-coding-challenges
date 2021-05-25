import styled from 'styled-components'

const Field = styled.div`
  & input {
    background-color: ${props => props.theme.colors.inputBackground};
    color: ${props => props.theme.colors.inputColor};

    &::placeholder {
      color: ${props => props.theme.colors.inputPlaceholderColor};
    }

    //=========== BULMA CSS CODE ===========//
    box-shadow: none;
    max-width: 100%;
    width: 100%;
    border-radius: 4px;
    display: inline-flex;
    font-size: 1rem;
    height: 2.5em;
    justify-content: flex-start;
    line-height: 1.5;
    position: relative;
    vertical-align: top;
    align-items: center;
    padding: calc(0.5em - 2px) calc(0.75em - 2px);
    border: 2px solid transparent;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  margin-bottom: 0.75rem;

  & div {
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
    position: relative;
    text-align: left;
  }
`

export default Field
