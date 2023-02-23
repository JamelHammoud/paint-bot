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
  }
`

export default StyledOptionsPopoverForm
