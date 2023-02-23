import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { persistStore, persistReducer, PersistConfig, StateReconciler } from 'redux-persist'
import { createFilter } from 'redux-persist-transform-filter'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { canvasReducer } from './slices'

const reducers = combineReducers({
  canvas: canvasReducer
})

const subsetFilter = createFilter('canvas', ['showBackground', 'closeOnSend'])

const persistConfig: PersistConfig<any, any, any> = {
  key: 'root',
  storage,
  whitelist: ['canvas'],
  transforms: [subsetFilter],
  stateReconciler: autoMergeLevel2 as StateReconciler<any>
}

const persistedReducer = persistReducer(persistConfig, reducers) as typeof reducers

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
