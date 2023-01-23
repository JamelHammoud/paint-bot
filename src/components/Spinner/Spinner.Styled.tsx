import styled from 'styled-components'

const StyledSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: loading 0.5s linear infinite;
    fill: ${({ theme }) => theme.color.foreground}40;
    height: 20px;
    width: 20px;
  }

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`

export default StyledSpinner
