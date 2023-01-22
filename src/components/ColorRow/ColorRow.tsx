import { FC, useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Button } from '..'
import { StyledColorRow } from '.'

type Props = {
  value: string
  onSelect: (value: string) => void
}

const colors = [
  '#000000',
  '#dc2626',
  '#ea580c',
  '#fbbf24',
  '#84cc16',
  '#22c55e',
  '#059669',
  '#0d9488',
  '#06b6d4',
  '#0ea5e9',
  '#2563eb',
  '#4f46e5',
  '#a855f7',
  '#ec4899',
  '#f43f5e'
]

const ColorRow: FC<Props> = ({ value, onSelect }) => {
  const ArrowLeft = () => {
    const { isFirstItemVisible, initComplete, scrollPrev } = useContext(VisibilityContext)

    if (!initComplete || isFirstItemVisible) {
      return <></>
    }

    return (
      <div className="arrow-background arrow-left">
        <button
          className="arrow-btn"
          onClick={() => scrollPrev()}
        >
          <ChevronLeftIcon />
        </button>
      </div>
    )
  }

  const ArrowRight = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext)

    if (isLastItemVisible) {
      return <></>
    }

    return (
      <div className="arrow-background arrow-right">
        <button
          className="arrow-btn"
          onClick={() => scrollNext()}
        >
          <ChevronRightIcon />
        </button>
      </div>
    )
  }

  return (
    <StyledColorRow>
      <div className="color-list">
        <ScrollMenu LeftArrow={<ArrowLeft />} RightArrow={<ArrowRight />}>
          {colors.map((color) => {
            return (
              <Button
                isIcon
                isActive={color === value}
                onClick={() => onSelect(color)}
                key={color}
              >
                <div
                  className="color-preview"
                  style={{ backgroundColor: color }}
                />
              </Button>
            )
          })}
        </ScrollMenu>
      </div>
      <Button className="color-btn" isIcon>
        <input type="color" value={value} onChange={(e) => onSelect(e.target.value)}/>
        <PlusIcon/>
      </Button>
    </StyledColorRow>
  )
}

export default ColorRow
