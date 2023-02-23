import { FC } from 'react'
import { setCanvasPenSize, useAppDispatch, useAppSelector } from '../../redux'
import { Button } from '..'
import { StyledSizeRow } from '.'

const sizes = [3, 5, 8, 14, 30]

const SizeRow: FC = () => {
  const dispatch = useAppDispatch()
  const { penSize: value } = useAppSelector(state => state.canvas)

  return (
    <StyledSizeRow>
      {sizes.map(size => {
        return (
          <Button
            isIcon
            isActive={size === value}
            onClick={() => dispatch(setCanvasPenSize(size))}
            key={size}
          >
            <div />
          </Button>
        )
      })}
    </StyledSizeRow>
  )
}

export default SizeRow
