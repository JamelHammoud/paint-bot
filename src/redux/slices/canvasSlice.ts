import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  penSize: number
  mode: 'pencil' | 'eraser'
  color: string
  message: string
  showBackground?: boolean
  sent?: boolean
  loading?: boolean
  showOptions?: boolean
}

const initialState: InitialState = {
  penSize: 5,
  mode: 'pencil',
  color: '#000000',
  message: '',
  showBackground: true,
  sent: false,
  loading: false,
  showOptions: false
}

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setCanvasPenSize: (state, action: PayloadAction<InitialState['penSize']>) => {
      state.penSize = action.payload
    },
    setCanvasMode: (state, action: PayloadAction<InitialState['mode']>) => {
      state.mode = action.payload
    },
    setCanvasColor: (state, action: PayloadAction<InitialState['color']>) => {
      state.color = action.payload
    },
    setCanvasMessage: (state, action: PayloadAction<InitialState['message']>) => {
      state.message = action.payload
    },
    setCanvasShowBackground: (state, action: PayloadAction<InitialState['showBackground']>) => {
      state.showBackground = action.payload
    },
    setCanvasSent: (state, action: PayloadAction<InitialState['sent']>) => {
      state.sent = action.payload
    },
    setCanvasLoading: (state, action: PayloadAction<InitialState['loading']>) => {
      state.loading = action.payload
    },
    setCanvasShowOptions: (state, action: PayloadAction<InitialState['showOptions']>) => {
      state.showOptions = action.payload
    }
  }
})

export const {
  setCanvasColor,
  setCanvasMessage,
  setCanvasLoading,
  setCanvasMode,
  setCanvasPenSize,
  setCanvasSent,
  setCanvasShowBackground,
  setCanvasShowOptions
} = canvasSlice.actions

export default canvasSlice.reducer
