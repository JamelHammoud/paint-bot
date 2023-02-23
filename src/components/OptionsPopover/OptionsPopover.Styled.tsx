import styled, { keyframes } from 'styled-components'

type StyledProps = {
  isOpen?: boolean
  showCloseAnim?: boolean
}

const popInAnim = keyframes`
  from {
    opacity: 0;
    top: calc(50% + 12px);
    transform: translate(-50%, -50%) scale(0.9);
  }
  to {
    opacity: 1;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
`

const popOutAnim = keyframes`
  from {
    opacity: 1;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    top: calc(50% + 12px);
    transform: translate(-50%, -50%) scale(0.9);
  }
`

const StyledOptionsPopover = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: ${({ theme }) => theme.elevation.modal};

  .options-popover {
    z-index: ${({ theme }) => theme.elevation.modal};
    border-radius: 10px;
    position: fixed;
    margin: 2rem;
    top: 50%;
    left: 50%;
    outline: none;
    overflow: hidden;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.color.background};
    margin: 0;
    padding: 0;
    border: 0;
    box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1), 0 0 0 1px #00000019,
      0 2px 4px 0px #00000036;
    animation: forwards 0.1s ease-in-out
      ${({ showCloseAnim }) => (showCloseAnim ? popOutAnim : popInAnim)};

    .options-popover-sizer {
      max-height: calc(100vh - 40px);
      max-width: calc(100vw - 40px);
      overflow-y: auto;
      display: flex;

      .close-btn {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 99;
        transition: 0.2s;
        height: 40px;
        width: 40px;
        color: ${({ theme }) => theme.color.gray[400]};
        background-color: transparent;

        svg {
          height: 24px;
          stroke-width: 2.2px;
        }

        &:hover {
          color: ${({ theme }) => theme.color.gray[900]};
        }
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transition: 0.1s;
    opacity: ${({ showCloseAnim }) => (showCloseAnim ? 0 : 1)};
    background-color: #000000cc;
  }

  @media (pointer: none), (pointer: coarse) {
    height: 100vh;

    .modal {
      .modal-content {
        max-height: -webkit-fill-available;
      }
    }
  }
`

export default StyledOptionsPopover
