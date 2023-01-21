import { createRef, FC, useEffect, useState } from 'react'
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas'
import { useLocation } from 'react-router-dom'
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, TrashIcon } from '@heroicons/react/20/solid'
import { PencilIcon } from '@heroicons/react/24/solid'
import { StyledCanvasView } from '.'

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

const CanvasView: FC = () => {
  const canvas = createRef<ReactSketchCanvasRef>()
  const location = useLocation()
  const [size, setSize] = useState(5)
  const [mode, setMode] = useState<'pencil' | 'eraser'>('pencil')
  const [color, setColor] = useState(colors[0])
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
    <StyledCanvasView>
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
          <button onClick={() => undo()}><ArrowUturnLeftIcon/></button>
          <button onClick={() => redo()}><ArrowUturnRightIcon/></button>
        </div>
        <div className="canvas-actions-group">
          <div className="canvas-actions-group canvas-tool">
            <button aria-selected={mode === 'pencil'} onClick={() => switchMode('pencil')}>
              <PencilIcon/>
            </button>
            <button aria-selected={mode === 'eraser'} onClick={() => switchMode('eraser')}>
              E
            </button>
            <button onClick={() => clear()}>
              <TrashIcon/>
            </button>
          </div>
          <hr className="vertical"/>
          <div className="canvas-actions-group canvas-brush-size">
            <button aria-selected={size === 3} onClick={() => setSize(3)}>
              <div/>
            </button>
            <button aria-selected={size === 5} onClick={() => setSize(5)}>
              <div/>
            </button>
            <button aria-selected={size === 8} onClick={() => setSize(8)}>
              <div/>
            </button>
            <button aria-selected={size === 14} onClick={() => setSize(14)}>
              <div/>
            </button>
          </div>
        </div>
      </div>
      <hr/>
      <div className="canvas-colors">
        {colors.map((c) => 
           (<button aria-selected={c === color} onClick={() => setColor(c)}>
            <div className="color-preview" style={{ backgroundColor: c }} />
          </button>)
        )}
      </div>
      <hr/>
      <button className="send-button" onClick={() => sendMessage()}>Send in #{channelName}</button>
    </StyledCanvasView>
  )
}

export default CanvasView
