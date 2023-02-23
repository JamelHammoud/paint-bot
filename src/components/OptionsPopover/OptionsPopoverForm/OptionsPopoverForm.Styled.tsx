import styled from 'styled-components'

const StyledOptionsPopoverForm = styled.div`
  width: 100vw;
  max-width: 400px;
  padding: 30px;
  box-sizing: border-box;
  display: grid;
  grid-gap: 20px;
  color: ${({ theme }) => theme.color.gray[900]};

  .options-popover-row {
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;

    span {
      margin-left: 10px;
    }

    textarea {
      resize: vertical;
      width: 100%;
      box-sizing: border-box;
      padding: 14px 16px;
      line-height: 21px;
      border: 2px solid ${({ theme }) => theme.color.gray[900]};
      border-radius: 6px;
      min-height: 200px;
      max-height: 300px;

      &::placeholder {
        color: ${({ theme }) => theme.color.gray[400]};
      }
    }
  }
`

export default StyledOptionsPopoverForm
