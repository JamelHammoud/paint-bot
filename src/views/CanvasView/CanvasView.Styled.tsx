import styled from 'styled-components'

const StyledCanvasView = styled.div`
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;

  .canvas-container {
    padding-top: 100%;
    position: relative;
    border: 2px solid black !important;
    border-radius: 4px;
    overflow: hidden;

    .canvas {
      border-radius: 0 !important;
      border: 0 !important;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  .canvas-actions {
    button {
      height: 36px;
      width: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid black;
      background-color: white;
      transition: 0.2s;
      flex-shrink: 0;
      border-radius: 4px;
      font-weight: 600;

      svg {
        height: 22px;
        stroke-width: 2.25px;
      }

      &:not(:last-child) {
        margin-right: 8px;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 0 0 black;
      }

      &:active {
        transform: translateY(0);
        box-shadow: none;
      }

      &[aria-selected="true"] {
        border-color: ${({ theme }) => theme.color.blue[800]};
        background-color: ${({ theme }) => theme.color.blue[100]};
        color: ${({ theme }) => theme.color.blue[800]};

        &:hover {
          box-shadow: 0 2px 0 0 ${({ theme }) => theme.color.blue[800]};
        }

        &:active {
          transform: translateY(0);
          box-shadow: none;
        }
      }
    }
  }

  .canvas-actions {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .canvas-actions-group {
      display: flex;
    }

    .canvas-brush-size {
      button {
        div {
          border-radius: 50%;
          background-color: black;
        }

        &:nth-of-type(1) {
          div {
            width: 4px;
            height: 4px;
          }
        }

        &:nth-of-type(2) {
          div {
            width: 8px;
            height: 8px;
          }
        }

        &:nth-of-type(3) {
          div {
            width: 12px;
            height: 12px;
          }
        }

        &:nth-of-type(4) {
          div {
            width: 18px;
            height: 18px;
          }
        }

        &:nth-of-type(5) {
          div {
            width: 24px;
            height: 24px;
          }
        }

        &[aria-selected="true"] {
          div {
            background-color: ${({ theme }) => theme.color.blue[800]};
          }
        }
      }
    }
  }

  .canvas-colors {
    display: flex;
    overflow-x: auto;
    padding-top: 5px;
    position: relative;
    padding-left: 20px;
    margin: -5px 0 20px 0;

    button {
      position: relative;

      .color-preview {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: inset 0 0 0 3px white;
        border-radius: 5px;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .canvas-brush-size {
    padding-right: 21px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 36px;
      right: 0;
      width: 2px;
      background-color: black;
    }
  }

  hr {
    margin: 20px 0;
    border: 0;
    height: 2px;
    background-color: black;

    &.vertical {
      margin: 0 20px;
      height: 100%;
      width: 2px;
    }
  }

  .send-button {
    height: 42px;
    width: 100%;
    border: 2px solid black;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    transition: 0.2s;
    border-radius: 4px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 0 0 black;
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
`

export default StyledCanvasView
