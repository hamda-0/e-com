// CartScreen.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import CartScreen from '../../../screens/Cart/CartScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('CartScreen', () => {
  test('displays empty cart message', () => {
    const store = mockStore({
      cart: { items: [], totalQuantity: 0 }
    });
    
    const { getByText } = render(
      <Provider store={store}>
        <CartScreen />
      </Provider>
    );
    
    expect(getByText('Your cart is empty')).toBeTruthy();
  });
});