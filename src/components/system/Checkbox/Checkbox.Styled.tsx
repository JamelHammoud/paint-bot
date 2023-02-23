import styled, { keyframes } from 'styled-components'

const checkAnim = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

const StyledCheckbox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 36px;
  width: 36px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover {
      cursor: pointer;
    }

    &:checked + .check-box {
      border: 2px solid ${({ theme }) => theme.color.gray[900]};
      background-color: ${({ theme }) => theme.color.gray[900]};
    }
  }

  .check-box {
    height: 32px;
    width: 32px;
    flex-shrink: 0;
    margin-right: 10px;
    border-radius: 6px;
    position: relative;
    border: 2px solid ${({ theme }) => theme.color.gray[900]};
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.background};
    transition: 0.2s;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 20px;
      stroke-width: 2.75px;

      path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: ${checkAnim} 15s linear forwards;
      }
    }
  }
`

export default StyledCheckbox
