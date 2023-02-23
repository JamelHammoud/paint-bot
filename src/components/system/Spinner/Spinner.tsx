import { FC } from 'react'
import { ReactComponent as SpinnerIcon } from './spinner.svg'
import { StyledSpinner } from '.'

const Spinner: FC = () => {
  return (
    <StyledSpinner className="spinner">
      <SpinnerIcon />
    </StyledSpinner>
  )
}

export default Spinner
