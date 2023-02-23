import styled from 'styled-components'

const StyledCanvasHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;

  .canvas-logo {
    display: flex;
    align-items: center;

    img {
      height: 36px;
      width: 36px;
      margin: 0 2px 0 -6px;
    }

    h1 {
      font-size: 26px;
    }
  }

  .canvas-header-actions {
    display: flex;
  }
`

export default StyledCanvasHeader
