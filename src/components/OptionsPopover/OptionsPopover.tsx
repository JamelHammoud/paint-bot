import { createRef, FC, MouseEvent, RefObject, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ReactSketchCanvasRef } from 'react-sketch-canvas'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { setCanvasShowOptions, useAppDispatch, useAppSelector } from '../../redux'
import { OptionsPopoverForm, StyledOptionsPopover } from '.'
import { XMarkIcon } from '@heroicons/react/24/outline'

type Props = {
  canvas: RefObject<ReactSketchCanvasRef> | null
}

const OptionsPopover: FC<Props> = ({ canvas }) => {
  const dispatch = useAppDispatch()
  const modalRef = createRef<HTMLDivElement>()
  const CLOSE_ANIM_LENGTH = 100
  const { showOptions } = useAppSelector(state => state.canvas)
  const [showCloseAnim, setShowCloseAnim] = useState(false)

  // Waits for the close animation to finish before
  // un-rendering the component
  const handleClose = (e?: MouseEvent) => {
    e?.stopPropagation()
    setShowCloseAnim(true)
    setTimeout(() => dispatch(setCanvasShowOptions(false)), CLOSE_ANIM_LENGTH)
  }

  useEffect(() => {
    setShowCloseAnim(false)
    const modal = modalRef.current

    if (!!modal && showOptions) {
      modal.focus()
      return disablePageScroll(modal)
    }

    enablePageScroll()
  }, [modalRef.current, showOptions])

  if (!showOptions) {
    return null
  }

  const Element = (
    <StyledOptionsPopover isOpen={showOptions} showCloseAnim={showCloseAnim}>
      <div tabIndex={-1} className="backdrop" onClick={e => handleClose(e)} />
      <dialog open className="options-popover">
        <div className="options-popover-sizer" ref={modalRef}>
          <button className="close-btn" onClick={e => handleClose(e)}>
            <XMarkIcon />
          </button>
          <OptionsPopoverForm canvas={canvas} />
        </div>
      </dialog>
    </StyledOptionsPopover>
  )

  return createPortal(Element, document.getElementById('popover-root') as HTMLElement)
}

export default OptionsPopover
