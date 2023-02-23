import { FC, RefObject } from 'react'
import { ReactSketchCanvasRef } from 'react-sketch-canvas'
import { saveAs } from 'file-saver'
import { setCanvasShowBackground, useAppDispatch, useAppSelector } from '../../../redux'
import { Button, Checkbox } from '../..'
import { StyledOptionsPopoverForm } from '.'

type Props = {
  canvas: RefObject<ReactSketchCanvasRef> | null
}

const OptionsPopoverForm: FC<Props> = ({ canvas }) => {
  const dispatch = useAppDispatch()
  const { showBackground } = useAppSelector(state => state.canvas)

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
        <Button onClick={() => handleDownload()}>Download Image</Button>
      </label>
    </StyledOptionsPopoverForm>
  )
}

export default OptionsPopoverForm
