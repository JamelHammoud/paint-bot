import { ButtonHTMLAttributes, FC } from 'react'
import { StyledButton } from '.'

type Props = {
  isIcon?: boolean
  isActive?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ isIcon, isActive, children, ...rest }) => {
  return (
    <StyledButton aria-selected={isActive} isIcon={isIcon} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button
