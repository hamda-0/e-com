import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    selectedCart:[]
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      
      state.totalQuantity++;
      state.totalAmount += newItem.price;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
    },
    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);
      
      if (existingItemIndex >= 0) {
        const existingItem = state.items[existingItemIndex];
        
        // Update totals
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        
        // Remove from selected items if present
        state.selectedCart = state.selectedCart.filter(itemId => itemId !== id);
        
        // Remove item completely
        state.items.splice(existingItemIndex, 1);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    toggleItemSelection(state, action) {
      const item = action.payload;
      const existingIndex = state.selectedCart.findIndex(i => i.id === item.id);
      
      if (existingIndex >= 0) {
        state.selectedCart.splice(existingIndex, 1);
      } else {
        state.selectedCart.push(item);
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart,toggleItemSelection ,deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;