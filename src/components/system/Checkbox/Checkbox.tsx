import { FC, InputHTMLAttributes } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { StyledCheckbox } from '.'

const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({ checked, ...rest }) => {
  return (
    <StyledCheckbox aria-checked={checked}>
      <input type="checkbox" checked={checked} {...rest} />
      <div className="check-box">{checked && <CheckIcon />}</div>
    </StyledCheckbox>
  )
}

export default Checkbox
