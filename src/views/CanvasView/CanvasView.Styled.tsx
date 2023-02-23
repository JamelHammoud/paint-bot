import styled, { css, keyframes } from 'styled-components'

const checkAnim = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

type StyledProps = {
  mode: 'pencil' | 'eraser'
  color: string
  size: number
  sent?: boolean
}

const StyledCanvasView = styled.div<StyledProps>`
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;

  * {
    user-select: none;
  }

  .canvas-container {
    padding-top: 100%;
    position: relative;
    border: 2px solid ${({ theme }) => theme.color.gray[900]} !important;
    border-radius: 6px;
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
      background-position: 0 0, 10px 10px;
      background-size: 21px 21px;
      background-image: linear-gradient(
          45deg,
          ${({ theme }) => theme.color.gray[200]} 25%,
          rgba(239, 239, 239, 0) 25%,
          rgba(239, 239, 239, 0) 75%,
          ${({ theme }) => theme.color.gray[200]} 75%,
          ${({ theme }) => theme.color.gray[200]}
        ),
        linear-gradient(
          45deg,
          ${({ theme }) => theme.color.gray[200]} 25%,
          rgba(239, 239, 239, 0) 25%,
          rgba(239, 239, 239, 0) 75%,
          ${({ theme }) => theme.color.gray[200]} 75%,
          ${({ theme }) => theme.color.gray[200]}
        );

      ${({ mode, color }) =>
        mode === 'pencil' &&
        `
        cursor: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCAzMiAzMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZyBmaWx0ZXI9J3VybCgjZmlsdGVyMF9kXzVfMTQpJz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTEwLjk3MzkgMjUuMTE5NEw2LjM0NDkxIDI2LjI1NjVDNC42MzcyOSAyNi42NzYgMy4yNTgzNyAyNC44NDYxIDQuMTMyMjggMjMuMzIwM0w2LjUwMTI3IDE5LjE4NEM2LjI3OTM0IDE4LjQxMSA2LjUzOTczIDE3LjU0NzIgNy4yMjAzOSAxNy4wMzQzTDIxLjU5NTggNi4yMDE2NkMyMi40NzggNS41MzY5MSAyMy43MzIgNS43MTMxNSAyNC4zOTY3IDYuNTk1M0wyOC4wMDc2IDExLjM4NzFDMjguNjcyNCAxMi4yNjkzIDI4LjQ5NjEgMTMuNTIzMyAyNy42MTQgMTQuMTg4TDEzLjIzODUgMjUuMDIwN0MxMi41NTc5IDI1LjUzMzYgMTEuNjU1OCAyNS41NDU4IDEwLjk3MzkgMjUuMTE5NFpNMTEuMjM2MyAyNC4wMjUyTDYuMTA2MzUgMjUuMjg1NEM1LjI1MjU0IDI1LjQ5NTEgNC41NjMwOCAyNC41ODAyIDUuMDAwMDQgMjMuODE3M0w3LjYyNTM5IDE5LjIzMzRDNy4yOTMwMSAxOC43OTIzIDcuMzgxMTMgMTguMTY1MyA3LjgyMjIxIDE3LjgzM0wyMi4xOTc2IDcuMDAwM0MyMi42Mzg3IDYuNjY3OTIgMjMuMjY1NyA2Ljc1NjA0IDIzLjU5ODEgNy4xOTcxMUwyNy4yMDkgMTEuOTg4OUMyNy41NDE0IDEyLjQzIDI3LjQ1MzIgMTMuMDU3IDI3LjAxMjIgMTMuMzg5NEwxMi42MzY3IDI0LjIyMkMxMi4xOTU3IDI0LjU1NDQgMTEuNTY4NiAyNC40NjYzIDExLjIzNjMgMjQuMDI1MlonIGZpbGw9J3doaXRlJy8+PHBhdGggZD0nTTYuMTA2MzUgMjUuMjg1NEwxMS4yMzYzIDI0LjAyNTJDMTEuNTY4NiAyNC40NjYzIDEyLjE5NTcgMjQuNTU0NCAxMi42MzY3IDI0LjIyMkwyNy4wMTIyIDEzLjM4OTRDMjcuNDUzMiAxMy4wNTcgMjcuNTQxNCAxMi40MyAyNy4yMDkgMTEuOTg4OUwyMy41OTgxIDcuMTk3MUMyMy4yNjU3IDYuNzU2MDMgMjIuNjM4NyA2LjY2NzkxIDIyLjE5NzYgNy4wMDAyOEw3LjgyMjIxIDE3LjgzM0M3LjM4MTEzIDE4LjE2NTMgNy4yOTMwMSAxOC43OTIzIDcuNjI1MzggMTkuMjMzNEw1LjAwMDA0IDIzLjgxNzNDNC41NjMwOCAyNC41ODAyIDUuMjUyNTQgMjUuNDk1MSA2LjEwNjM1IDI1LjI4NTRaJyBmaWxsPScj${btoa(
          color
        )}Jy8+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yMi4xOTc3IDcuMDAwMjZDMjIuNjM4NyA2LjY2Nzg5IDIzLjI2NTcgNi43NTYwMSAyMy41OTgxIDcuMTk3MDhMMjUuNDAzNiA5LjU5Mjk5TDIzLjgwNjMgMTAuNzk2NkwyMS4zOTkgNy42MDIwOEw4LjYyMDg3IDE3LjIzMTFMMTEuMDI4MSAyMC40MjU3TDUuMDY5MTggMjQuOTE2QzQuODQ0NzEgMjQuNjE4MiA0Ljc4MTU4IDI0LjE5ODcgNS4wMDAwNiAyMy44MTcyTDcuNjI1NDEgMTkuMjMzNEM3LjI5MzAzIDE4Ljc5MjMgNy4zODExNSAxOC4xNjUzIDcuODIyMjMgMTcuODMyOUwyMi4xOTc3IDcuMDAwMjZaTTExLjAyODEgMjAuNDI1N0wyMy44MDYzIDEwLjc5NjZMMjYuMjEzNiAxMy45OTEyTDEzLjQzNTQgMjMuNjIwMkwxMS4wMjgxIDIwLjQyNTdaJyBmaWxsPSd3aGl0ZScgZmlsbC1vcGFjaXR5PScwLjMnLz48cGF0aCBkPSdNMjMuODA2MyAxMC43OTY2TDIxLjM5OSA3LjYwMjA3TDguNjIwODYgMTcuMjMxMUwxMS4wMjgxIDIwLjQyNTZMMjMuODA2MyAxMC43OTY2WicgZmlsbD0nd2hpdGUnIGZpbGwtb3BhY2l0eT0nMC40MycvPjxwYXRoIGQ9J00yNS43MTMyIDE0LjM2MUwyNC44Nzc4IDE0Ljk5MDZDMjQuNjkwNiAxNC44Njg5IDI0LjUwMDggMTQuNzc2MSAyNC4zMDYxIDE0LjY4NTZDMjQuMjY5OSAxNC42Njg4IDI0LjIzMzEgMTQuNjUxOSAyNC4xOTU2IDE0LjYzNDdDMjMuNzU4MSAxNC40MzQyIDIzLjIzNjkgMTQuMTk1NCAyMi44MDkyIDEzLjYyNzdDMjIuMzY0MSAxMy4wMzcxIDIyLjIzMTEgMTIuMzczOSAyMi4xMjE2IDExLjgyODVMMjIuMTE0NiAxMS43OTMzQzIxLjk5NzkgMTEuMjEyNCAyMS44OTkzIDEwLjc1ODcgMjEuNjAxOCAxMC4zNjM4QzIxLjMzMDUgMTAuMDAzOCAyMS4wMjUgOS44NjIzNCAyMC41Njc1IDkuNjUwNTRMMjAuNDgyIDkuNjEwOTNDMjAuMTc3MiA5LjQ2OTI1IDE5Ljg0MDUgOS4zMDIzMyAxOS40OTY0IDkuMDI4NjlMMjAuMzMxOCA4LjM5OTE2QzIwLjUxOSA4LjUyMDc5IDIwLjcwODggOC42MTM1OCAyMC45MDM1IDguNzA0MDlDMjAuOTM5NiA4LjcyMDg5IDIwLjk3NjUgOC43Mzc3OCAyMS4wMTQgOC43NTQ5NkMyMS40NTE1IDguOTU1NDUgMjEuOTcyNiA5LjE5NDMxIDIyLjQwMDQgOS43NjE5N0MyMi44NDU1IDEwLjM1MjYgMjIuOTc4NSAxMS4wMTU4IDIzLjA4NzkgMTEuNTYxMUwyMy4wOTUgMTEuNTk2NEMyMy4yMTE3IDEyLjE3NzMgMjMuMzEwMyAxMi42MzEgMjMuNjA3OCAxMy4wMjU5QzIzLjg3OTEgMTMuMzg1OSAyNC4xODQ2IDEzLjUyNzMgMjQuNjQyMSAxMy43MzkxTDI0LjcyNzUgMTMuNzc4OEMyNS4wMzI0IDEzLjkyMDQgMjUuMzY5MiAxNC4wODc0IDI1LjcxMzIgMTQuMzYxWicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMC4yJy8+PHBhdGggZD0nTTE1LjMzNDUgMjIuMTg5MUwxNC40OTkxIDIyLjgxODZDMTQuMzExOSAyMi42OTcgMTQuMTIyMSAyMi42MDQyIDEzLjkyNzMgMjIuNTEzN0MxMy44OTEyIDIyLjQ5NjkgMTMuODU0MyAyMi40OCAxMy44MTY4IDIyLjQ2MjhDMTMuMzc5NCAyMi4yNjIzIDEyLjg1ODIgMjIuMDIzNSAxMi40MzA0IDIxLjQ1NThDMTEuOTg1MyAyMC44NjUxIDExLjg1MjMgMjAuMjAyIDExLjc0MjkgMTkuNjU2NkwxMS43MzU4IDE5LjYyMTRDMTEuNjE5MSAxOS4wNDA0IDExLjUyMDYgMTguNTg2NyAxMS4yMjMgMTguMTkxOUMxMC45NTE3IDE3LjgzMTggMTAuNjQ2MyAxNy42OTA0IDEwLjE4ODcgMTcuNDc4NkwxMC4xMDMzIDE3LjQzOUM5Ljc5ODQ0IDE3LjI5NzMgOS40NjE3MSAxNy4xMzA0IDkuMTE3NjUgMTYuODU2OEw5Ljk1MzA3IDE2LjIyNzJDMTAuMTQwMiAxNi4zNDg5IDEwLjMzIDE2LjQ0MTcgMTAuNTI0OCAxNi41MzIyQzEwLjU2MDkgMTYuNTQ5IDEwLjU5NzggMTYuNTY1OSAxMC42MzUzIDE2LjU4M0MxMS4wNzI3IDE2Ljc4MzUgMTEuNTkzOSAxNy4wMjI0IDEyLjAyMTcgMTcuNTlDMTIuNDY2NyAxOC4xODA3IDEyLjU5OTggMTguODQzOSAxMi43MDkyIDE5LjM4OTJMMTIuNzE2MyAxOS40MjQ0QzEyLjgzMyAyMC4wMDU0IDEyLjkzMTUgMjAuNDU5MSAxMy4yMjkxIDIwLjg1NEMxMy41MDA0IDIxLjIxNCAxMy44MDU4IDIxLjM1NTQgMTQuMjYzNCAyMS41NjcyTDE0LjM0ODggMjEuNjA2OEMxNC42NTM3IDIxLjc0ODUgMTQuOTkwNCAyMS45MTU1IDE1LjMzNDUgMjIuMTg5MVonIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzAuMicvPjwvZz48ZGVmcz48ZmlsdGVyIGlkPSdmaWx0ZXIwX2RfNV8xNCcgeD0nMS44NjE4OScgeT0nNC43OTg4Mycgd2lkdGg9JzI4LjU0ODYnIGhlaWdodD0nMjQuNTE4NicgZmlsdGVyVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9J3NSR0InPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9JzAnIHJlc3VsdD0nQmFja2dyb3VuZEltYWdlRml4Jy8+PGZlQ29sb3JNYXRyaXggaW49J1NvdXJjZUFscGhhJyB0eXBlPSdtYXRyaXgnIHZhbHVlcz0nMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAnIHJlc3VsdD0naGFyZEFscGhhJy8+PGZlT2Zmc2V0IGR5PScxJy8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScvPjxmZUNvbXBvc2l0ZSBpbjI9J2hhcmRBbHBoYScgb3BlcmF0b3I9J291dCcvPjxmZUNvbG9yTWF0cml4IHR5cGU9J21hdHJpeCcgdmFsdWVzPScwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1IDAnLz48ZmVCbGVuZCBtb2RlPSdub3JtYWwnIGluMj0nQmFja2dyb3VuZEltYWdlRml4JyByZXN1bHQ9J2VmZmVjdDFfZHJvcFNoYWRvd181XzE0Jy8+PGZlQmxlbmQgbW9kZT0nbm9ybWFsJyBpbj0nU291cmNlR3JhcGhpYycgaW4yPSdlZmZlY3QxX2Ryb3BTaGFkb3dfNV8xNCcgcmVzdWx0PSdzaGFwZScvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4K") 6 30, auto;
      `}

      ${({ mode, size }) =>
        mode === 'eraser' &&
        `
        cursor: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0n${btoa(
          `${Math.max(10, size * 2)}`
        ).replaceAll('=', '')}nIGhlaWdodD0n${btoa(`${Math.max(10, size * 2)}`).replaceAll(
          '=',
          ''
        )}nIHZpZXdCb3g9JzAgMCAzMiAzMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZyBmaWx0ZXI9J3VybCgjZmlsdGVyMF9kXzZfMzMpJz48Y2lyY2xlIGN4PScxNicgY3k9JzE2JyByPScxMS41JyBzdHJva2U9J3doaXRlJy8+PGNpcmNsZSBjeD0nMTYnIGN5PScxNicgcj0nMTAnIHN0cm9rZT0nYmxhY2snIHN0cm9rZS13aWR0aD0nMicvPjwvZz48ZGVmcz48ZmlsdGVyIGlkPSdmaWx0ZXIwX2RfNl8zMycgeD0nLTInIHk9Jy0xJyB3aWR0aD0nMzYnIGhlaWdodD0nMzYnIGZpbHRlclVuaXRzPSd1c2VyU3BhY2VPblVzZScgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSdzUkdCJz48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PScwJyByZXN1bHQ9J0JhY2tncm91bmRJbWFnZUZpeCcvPjxmZUNvbG9yTWF0cml4IGluPSdTb3VyY2VBbHBoYScgdHlwZT0nbWF0cml4JyB2YWx1ZXM9JzAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwJyByZXN1bHQ9J2hhcmRBbHBoYScvPjxmZU9mZnNldCBkeT0nMScvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz48ZmVDb21wb3NpdGUgaW4yPSdoYXJkQWxwaGEnIG9wZXJhdG9yPSdvdXQnLz48ZmVDb2xvck1hdHJpeCB0eXBlPSdtYXRyaXgnIHZhbHVlcz0nMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwJy8+PGZlQmxlbmQgbW9kZT0nbm9ybWFsJyBpbjI9J0JhY2tncm91bmRJbWFnZUZpeCcgcmVzdWx0PSdlZmZlY3QxX2Ryb3BTaGFkb3dfNl8zMycvPjxmZUJsZW5kIG1vZGU9J25vcm1hbCcgaW49J1NvdXJjZUdyYXBoaWMnIGluMj0nZWZmZWN0MV9kcm9wU2hhZG93XzZfMzMnIHJlc3VsdD0nc2hhcGUnLz48L2ZpbHRlcj48L2RlZnM+PC9zdmc+Cg==") ${Math.max(
          10,
          size * 2
        ) /
          2 -
          1} ${Math.max(10, size * 2) / 2 - 1}, auto;
      `}
    }
  }

  .canvas-actions {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .canvas-actions-group {
      display: flex;
    }
  }

  .canvas-tools {
    .clear-btn {
      justify-content: unset;
      padding: 0 5px;

      svg {
        flex-shrink: 0;
        transition: 0.2s;
      }

      &::after {
        content: 'Clear';
        width: 100%;
        overflow: hidden;
        display: block;
        max-width: 0;
        transition: 0.2s;
        padding-left: 4px;
        opacity: 0;
        pointer-events: none;
      }

      &:hover {
        width: auto;
        padding: 0 8px 0 5px;

        &::after {
          max-width: 45px;
          opacity: 1;
        }
      }
    }
  }

  .send-button {
    height: 42px;

    &:disabled {
      pointer-events: none;
    }
  }

  .try-another-message {
    text-align: center;
    display: block;
    margin-top: 10px;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.color.gray[600]};

    a {
      color: ${({ theme }) => theme.color.gray[900]};
      font-weight: 600;
      text-decoration: underline;
    }
  }

  ${({ sent, theme }) =>
    sent &&
    css`
      .canvas-container {
        pointer-events: none;
      }

      .send-button {
        background-color: ${theme.color.purple[800]};
        color: ${theme.color.background};

        svg {
          margin-right: 6px;

          path {
            stroke-width: 2.2px;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: ${checkAnim} 15s linear forwards;
          }
        }
      }
    `}
`

export default StyledCanvasView
