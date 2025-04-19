import cartSlice, {
    addItemToCart,
    clearCart,
    deleteItemFromCart,
    removeItemFromCart
} from '../../store/cartSlice';
  
  describe('cartSlice', () => {
    const initialState = {
      items: [],
      totalQuantity: 0,
      totalAmount: 0,
      selectedCart: []
    };
  
    const mockProduct = {
      id: '1',
      name: 'Margherita Pizza',
      price: 10.99,
      image: 'pizza.jpg'
    };
  
    describe('addItemToCart', () => {
      test('should add new item to cart', () => {
        const action = addItemToCart(mockProduct);
        const state = cartSlice.reducer(initialState, action);
        
        expect(state.items.length).toBe(1);
        expect(state.items[0]).toEqual({
          ...mockProduct,
          quantity: 1,
          totalPrice: mockProduct.price
        });
        expect(state.totalQuantity).toBe(1);
        expect(state.totalAmount).toBe(mockProduct.price);
      });
  
      test('should increase quantity if item exists', () => {
        const existingState = {
          ...initialState,
          items: [{...mockProduct, quantity: 1, totalPrice: mockProduct.price}],
          totalQuantity: 1,
          totalAmount: mockProduct.price
        };
        
        const action = addItemToCart(mockProduct);
        const state = cartSlice.reducer(existingState, action);
        
        expect(state.items[0].quantity).toBe(2);
        expect(state.items[0].totalPrice).toBe(mockProduct.price * 2);
        expect(state.totalQuantity).toBe(2);
        expect(state.totalAmount).toBe(mockProduct.price * 2);
      });
    });
  
    describe('removeItemFromCart', () => {
      test('should decrease quantity if quantity > 1', () => {
        const existingState = {
          ...initialState,
          items: [{...mockProduct, quantity: 2, totalPrice: mockProduct.price * 2}],
          totalQuantity: 2,
          totalAmount: mockProduct.price * 2
        };
        
        const action = removeItemFromCart(mockProduct.id);
        const state = cartSlice.reducer(existingState, action);
        
        expect(state.items[0].quantity).toBe(1);
        expect(state.totalQuantity).toBe(1);
        expect(state.totalAmount).toBe(mockProduct.price);
      });
  
      test('should remove item if quantity is 1', () => {
        const existingState = {
          ...initialState,
          items: [{...mockProduct, quantity: 1, totalPrice: mockProduct.price}],
          totalQuantity: 1,
          totalAmount: mockProduct.price
        };
        
        const action = removeItemFromCart(mockProduct.id);
        const state = cartSlice.reducer(existingState, action);
        
        expect(state.items.length).toBe(0);
        expect(state.totalQuantity).toBe(0);
        expect(state.totalAmount).toBe(0);
      });
    });
  
    describe('deleteItemFromCart', () => {
      test('should completely remove item regardless of quantity', () => {
        const existingState = {
          ...initialState,
          items: [{...mockProduct, quantity: 3, totalPrice: mockProduct.price * 3}],
          totalQuantity: 3,
          totalAmount: mockProduct.price * 3,
          selectedCart: [mockProduct.id]
        };
        
        const action = deleteItemFromCart(mockProduct.id);
        const state = cartSlice.reducer(existingState, action);
        
        expect(state.items.length).toBe(0);
        expect(state.totalQuantity).toBe(0);
        expect(state.totalAmount).toBe(0);
        expect(state.selectedCart.length).toBe(0);
      });
    });
  
    describe('clearCart', () => {
      test('should empty the cart completely', () => {
        const existingState = {
          ...initialState,
          items: [{...mockProduct, quantity: 2, totalPrice: mockProduct.price * 2}],
          totalQuantity: 2,
          totalAmount: mockProduct.price * 2,
          selectedCart: [mockProduct.id]
        };
        
        const action = clearCart();
        const state = cartSlice.reducer(existingState, action);
        
        expect(state.items.length).toBe(0);
        expect(state.totalQuantity).toBe(0);
        expect(state.totalAmount).toBe(0);
        expect(state.selectedCart.length).toBe(0);
      });
    });
 
  });