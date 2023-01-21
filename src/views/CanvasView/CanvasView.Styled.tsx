import styled from 'styled-components'

const StyledCanvasView = styled.div`
  max-width: 500px;
  padding: 20px;

  .canvas-container {
    padding-top: 100%;
    position: relative;
    border: 2px solid black !important;

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

  .canvas-actions, .canvas-colors {
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

      svg {
        height: 22px;
      }

      &:not(:last-child) {
        margin-right: 10px;
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
        border-color: ${({ theme }) => theme.color.blue[600]};
        background-color: ${({ theme }) => theme.color.blue[100]};
        color: ${({ theme }) => theme.color.blue[600]};

        &:hover {
          box-shadow: 0 2px 0 0 ${({ theme }) => theme.color.blue[600]};
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

        &[aria-selected="true"] {
          div {
            background-color: ${({ theme }) => theme.color.blue[600]};
          }
        }
      }
    }
  }

  .canvas-colors {
    display: flex;
    overflow-x: auto;
    padding-top: 5px;
    margin-top: -5px;

    button {
      position: relative;

      .color-preview {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
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
    font-weight: 500;
    transition: 0.2s;

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
