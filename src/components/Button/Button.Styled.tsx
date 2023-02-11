import styled from 'styled-components'

type StyledProps = {
  isIcon?: boolean
}

const StyledButton = styled.button<StyledProps>`
  height: 36px;
  width: ${({ isIcon }) => (isIcon ? '36px' : '100%')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.color.gray[900]};
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.gray[900]};
  transition: 0.2s;
  flex-shrink: 0;
  border-radius: 6px;
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
    box-shadow: 0 2px 0 0 ${({ theme }) => theme.color.gray[900]};
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &[aria-selected='true'] {
    border-color: ${({ theme }) => theme.color.purple[800]};
    background-color: ${({ theme }) => theme.color.purple[100]};
    color: ${({ theme }) => theme.color.purple[800]};

    &:hover {
      box-shadow: 0 2px 0 0 ${({ theme }) => theme.color.purple[800]};
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
`

export default StyledButton
