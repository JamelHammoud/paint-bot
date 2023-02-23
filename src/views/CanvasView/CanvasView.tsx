import debounce from 'lodash.debounce'
import { createRef, FC, useEffect, useState } from 'react'
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas'
import { useHistory, useLocation } from 'react-router-dom'
import { deflate } from 'pako'
import { TrashIcon, PencilIcon, CheckIcon } from '@heroicons/react/24/outline'
import { ReactComponent as EraserIcon } from '../../assets/eraser-icon.svg'
import { Button, CanvasHeader, ColorRow, OptionsPopover, SizeRow, Spinner } from '../../components'
import { ROUTES } from '../../utils'
import {
  setCanvasColor,
  setCanvasLoading,
  setCanvasMode,
  setCanvasPenSize,
  setCanvasSent,
  useAppDispatch,
  useAppSelector
} from '../../redux'
import { StyledCanvasView } from '.'

const CanvasView: FC = () => {
  const canvas = createRef<ReactSketchCanvasRef>()
  const location = useLocation()
  const history = useHistory()
  const dispatch = useAppDispatch()
  const { color, mode, penSize, loading, sent, showBackground } = useAppSelector(
    state => state.canvas
  )
  const [channelName, setChannelName] = useState('general')

  const clear = () => {
    canvas.current?.clearCanvas()
  }

  const switchMode = (modeToSwitch: typeof mode) => {
    const isEraseMode = modeToSwitch === 'eraser' ? true : false
    dispatch(setCanvasMode(modeToSwitch))
    canvas.current?.eraseMode(isEraseMode)
  }

  const resetState = () => {
    dispatch(setCanvasSent(false))
    dispatch(setCanvasPenSize(5))
    dispatch(setCanvasColor('#000000'))
    switchMode('pencil')
    canvas.current?.resetCanvas()
  }

  const sendMessage = async () => {
    try {
      dispatch(setCanvasLoading(true))

      const urlParams = new URLSearchParams(location.search)
      const params = Object.fromEntries(urlParams)

      if (!params.pid) {
        return
      }

      const image = await canvas.current?.exportImage('png')

      const body = {
        image: deflate(image || ''),
        pid: params.pid
      }

      await fetch(process.env.REACT_APP_SERVER_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      window.close()
      dispatch(setCanvasSent(true))
    } catch (err) {
      console.error(err)
    } finally {
      dispatch(setCanvasLoading(false))
    }
  }

  const handleColor = debounce((color: string) => {
    dispatch(setCanvasColor(color))
    switchMode('pencil')
  }, 100)

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const params = Object.fromEntries(urlParams)

    if (!params?.pid) {
      history.push(ROUTES.about)
      return
    }

    setChannelName(params?.cname || 'general')
  }, [location.search])

  return (
    <StyledCanvasView mode={mode} color={color.replace('#', '')} size={penSize} sent={sent}>
      <CanvasHeader canvas={canvas} />
      <div className="canvas-container">
        <ReactSketchCanvas
          className="canvas"
          backgroundImage={showBackground ? undefined : '/grid.png'}
          strokeWidth={penSize}
          eraserWidth={penSize}
          strokeColor={color}
          exportWithBackgroundImage={false}
          ref={canvas}
        />
      </div>
      <div className="canvas-actions">
        <div className="canvas-actions-group">
          <div className="canvas-actions-group canvas-tools">
            <Button isIcon isActive={mode === 'pencil'} onClick={() => switchMode('pencil')}>
              <PencilIcon />
            </Button>
            <Button isIcon isActive={mode === 'eraser'} onClick={() => switchMode('eraser')}>
              <EraserIcon />
            </Button>
            <Button className="clear-btn" isIcon onClick={() => clear()}>
              <TrashIcon />
            </Button>
          </div>
        </div>
        <SizeRow />
      </div>
      <ColorRow value={color} onSelect={color => handleColor(color)} />
      <Button className="send-button" disabled={sent || loading} onClick={() => sendMessage()}>
        {!sent && !loading && `Send in #${channelName}`}
        {sent && !loading && (
          <>
            <CheckIcon className="check-icon" /> Painting sent
          </>
        )}
        {loading && <Spinner />}
      </Button>
      {sent && (
        <span className="try-another-message">
          Want to paint something else? <a onClick={() => resetState()}>Reset canvas</a>.
        </span>
      )}
      <OptionsPopover canvas={canvas} />
    </StyledCanvasView>
  )
}

export default CanvasView
