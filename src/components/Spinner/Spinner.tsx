import { FC } from 'react'
import { ReactComponent as SpinnerIcon } from './spinner.svg'
import { StyledSpinner } from '.'

type Props = {
  isLarge?: boolean
}

const Spinner: FC<Props> = ({ isLarge }) => {
  return (
    <StyledSpinner className="spinner">
      <SpinnerIcon />
    </StyledSpinner>
  )
}

export default Spinner
