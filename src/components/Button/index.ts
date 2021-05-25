import styled from 'styled-components'
import { Link } from 'react-router-dom'

type ButtonProps = {
  primary?: boolean
}

const Button = styled(Link)<ButtonProps>`
  background-color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${props => props.theme.colors.buttonColor};

  :hover {
    background-color: ${props =>
      props.primary
        ? props.theme.colors.primaryHover
        : props.theme.colors.secondaryHover};
    border-color: transparent;
    color: ${props => props.theme.colors.buttonColor};
  }

  //=========== BULMA CSS CODE ===========//
  height: 30px;
  width: 100px;
  margin-bottom: 0.5rem;
  justify-content: center;
  padding: calc(0.5em - 2px) 1em;
  text-align: center;
  white-space: nowrap;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  display: inline-flex;
  font-size: 1rem;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;

    &:not(:last-child) {
      margin-right: 0;
    }
  }
`

export default Button
