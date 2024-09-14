import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Produto>) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (!itemExists) {
        state.items.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer
