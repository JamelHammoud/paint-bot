import { FC } from 'react'
import { Button } from '..'
import { StyledSizeRow } from '.'

type Props = {
  value: number
  onSelect: (value: number) => void
}

const sizes = [3, 5, 8, 14, 30]

const SizeRow: FC<Props > = ({ value, onSelect }) => {
  return (
    <StyledSizeRow>
      {sizes.map((size) => {
        return (
          <Button
            isIcon
            isActive={size === value}
            onClick={() => onSelect(size)}
            key={size}
          >
            <div/>
          </Button>
        )
      })}
    </StyledSizeRow>
  )
}

export default SizeRow
