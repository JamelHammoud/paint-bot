import styled from 'styled-components'

const StyledSizeRow = styled.div`
  display: flex;

  button {
    div {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.gray[900]};
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
        background-color: ${({ theme }) => theme.color.purple[800]};
      }
    }
  }
`

export default StyledSizeRow
