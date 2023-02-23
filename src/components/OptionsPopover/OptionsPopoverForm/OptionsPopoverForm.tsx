import { FC, RefObject } from 'react'
import { ReactSketchCanvasRef } from 'react-sketch-canvas'
import { saveAs } from 'file-saver'
import {
  setCanvasCloseOnSend,
  setCanvasMessage,
  setCanvasShowBackground,
  useAppDispatch,
  useAppSelector
} from '../../../redux'
import { Button, Checkbox } from '../..'
import { StyledOptionsPopoverForm } from '.'

type Props = {
  canvas: RefObject<ReactSketchCanvasRef> | null
}

const OptionsPopoverForm: FC<Props> = ({ canvas }) => {
  const dispatch = useAppDispatch()
  const { message, showBackground, closeOnSend } = useAppSelector(state => state.canvas)

  const handleDownload = async () => {
    const image = await canvas?.current?.exportImage('png')
    saveAs(image || '', 'canvas.png')
  }

  return (
    <StyledOptionsPopoverForm>
      <label className="options-popover-row">
        <Checkbox
          checked={!showBackground}
          onChange={e => dispatch(setCanvasShowBackground(e.target.checked ? false : true))}
        />
        <span>Transparent background</span>
      </label>
      <label className="options-popover-row">
        <Checkbox
          checked={closeOnSend}
          onChange={e => dispatch(setCanvasCloseOnSend(e.target.checked ? true : false))}
        />
        <span>Close window on send</span>
      </label>
      <label className="options-popover-row">
        <textarea
          value={message}
          placeholder="Attach a message..."
          maxLength={300}
          onChange={e => dispatch(setCanvasMessage(e.target.value))}
        />
      </label>
      <label className="options-popover-row">
        <Button onClick={() => handleDownload()}>Download Image</Button>
      </label>
    </StyledOptionsPopoverForm>
  )
}

export default OptionsPopoverForm
