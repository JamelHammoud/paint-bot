import { FC, RefObject, useEffect } from 'react'
import { ReactSketchCanvasRef } from 'react-sketch-canvas'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { ArrowUturnLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline'
import { setCanvasShowOptions, useAppDispatch } from '../../redux'
import { Button } from '..'
import { StyledCanvasHeader } from '.'

type Props = {
  canvas: RefObject<ReactSketchCanvasRef>
}

const CanvasHeader: FC<Props> = ({ canvas }) => {
  const dispatch = useAppDispatch()

  const undo = () => {
    canvas.current?.undo()
  }

  const redo = () => {
    canvas.current?.redo()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.shiftKey && e.metaKey && e.key === 'z') {
      return redo()
    }
    if (e.metaKey && e.key === 'z') {
      return undo()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', e => handleKeyDown(e))

    return () => {
      document.removeEventListener('keydown', e => handleKeyDown(e))
    }
  }, [])

  return (
    <StyledCanvasHeader>
      <div className="canvas-logo">
        <img src="/paint-icon.png" alt="Paint Logo" />
        <h1>Paint</h1>
      </div>
      <div className="canvas-header-actions">
        <Button isIcon onClick={() => undo()}>
          <ArrowUturnLeftIcon />
        </Button>
        <Button isIcon onClick={() => redo()}>
          <ArrowUturnRightIcon />
        </Button>
        <Button isIcon onClick={() => dispatch(setCanvasShowOptions(true))}>
          <EllipsisHorizontalIcon />
        </Button>
      </div>
    </StyledCanvasHeader>
  )
}

export default CanvasHeader
