import { createRef, FC, useEffect, useState } from 'react'
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas'
import { useLocation } from 'react-router-dom'
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import { Button, ColorRow, SizeRow } from '../../components'
import { StyledCanvasView } from '.'

const CanvasView: FC = () => {
  const canvas = createRef<ReactSketchCanvasRef>()
  const location = useLocation()
  const [size, setSize] = useState(5)
  const [mode, setMode] = useState<'pencil' | 'eraser'>('pencil')
  const [color, setColor] = useState('#000000')
  const [channelName, setChannelName] = useState('general')

  const undo = () => {
    canvas.current?.undo()
  }

  const redo = () => {
    canvas.current?.redo()
  }

  const clear = () => {
    canvas.current?.clearCanvas()
  }

  const switchMode = (modeToSwitch: typeof mode) => {
    const isEraseMode = modeToSwitch === 'eraser' ? true : false
    setMode(modeToSwitch)
    canvas.current?.eraseMode(isEraseMode)
  }

  const sendMessage = async () => {
    const urlParams = new URLSearchParams(location.search)
    const params = Object.fromEntries(urlParams)
    const image = await canvas.current?.exportImage('png')

    const body = {
      image,
      iid: params?.iid,
      uid: params?.uid,
      cid: params?.cid
    }

    await fetch('https://e42b-156-34-49-214.ngrok.io/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    window.close()
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const params = Object.fromEntries(urlParams)

    setChannelName(params?.cname || 'general')
  }, [location.search])

  return (
    <StyledCanvasView mode={mode}>
      <div className="canvas-header">
        <div className="canvas-logo">
          <img src="/paint-icon.png" alt="Paint Logo"/>
          <h1>Paint</h1>
        </div>
        <div className="canvas-header-actions">
          <Button isIcon onClick={() => undo()}>
            <ArrowUturnLeftIcon/>
          </Button>
          <Button isIcon onClick={() => redo()}>
            <ArrowUturnRightIcon/>
          </Button>
        </div>
      </div>
      <div className="canvas-container">
        <ReactSketchCanvas
          className="canvas"
          strokeWidth={size}
          eraserWidth={size}
          strokeColor={color}
          ref={canvas}
        />
      </div>
      <div className="canvas-actions">
        <div className="canvas-actions-group">
          <div className="canvas-actions-group canvas-tools">
            <Button isIcon isActive={mode === 'pencil'} onClick={() => switchMode('pencil')}>
              <PencilIcon/>
            </Button>
            <Button isIcon isActive={mode === 'eraser'} onClick={() => switchMode('eraser')}>
              Er
            </Button>
            <Button className="clear-btn" isIcon onClick={() => clear()}>
              <TrashIcon/>
            </Button>
          </div>
        </div>
        <SizeRow value={size} onSelect={(size) => setSize(size)} />
      </div>
      <ColorRow value={color} onSelect={(color) => setColor(color)} />
      <Button className="send-button" onClick={() => sendMessage()}>Send in #{channelName}</Button>
    </StyledCanvasView>
  )
}

export default CanvasView
