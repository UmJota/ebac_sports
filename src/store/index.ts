import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducer/Carrinho'
import favoritesReducer from './reducer/Favorito'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer
  }
})

// Tipagem do store e do dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
