import styled, { keyframes } from 'styled-components'

export const frames = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg)
    }
`

export const LoadingContainer = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
  position: fixed;
  z-index: 1;
`

export const LoadingAnimation = styled.div`
  height: 70px;
  width: 70px;
  border: 4px solid ${props => props.theme.colors.primary};
  border-bottom: none;
  border-radius: 999px;
  animation: ${frames} 1s linear;
  animation-iteration-count: infinite;
`
