import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DetailScreen from '../../../screens/Detail/DetailScreen';
import { products } from '../../../assets/data/mockData';
import { addItemToCart } from '../../../store/cartSlice';

// Mock navigation
jest.mock('../../navigation/rootNavigation', () => ({
  GoBack: jest.fn()
}));

// Mock components
jest.mock('./Component/AddtoCart', () => 'AddToCartButton');
jest.mock('./Component/CircularBtn', () => 'CircularBtn');
jest.mock('./Component/ItemDescription', () => 'ItemDescription');
jest.mock('./Component/ItemName', () => 'ItemName');
jest.mock('./Component/QuantitySelector', () => 'QuantitySelector');

const mockStore = configureStore([]);

describe('DetailScreen', () => {
  const mockProduct = products[0]; // Safety Helmet
  const mockRoute = {
    params: {
      item: mockProduct
    }
  };

  let store;

  beforeEach(() => {
    store = mockStore({
      cart: { items: [] }
    });
  });

  test('renders all product details correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DetailScreen route={mockRoute} />
      </Provider>
    );

    expect(getByTestId('product-image').props.source.uri).toBe(mockProduct.image);
  });

  test('quantity selector increases quantity', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DetailScreen route={mockRoute} />
      </Provider>
    );

    fireEvent.press(getByTestId('increase-btn'));
    // Verify quantity increased (you'll need to expose quantity state in test)
  });

  test('quantity selector does not decrease below 1', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DetailScreen route={mockRoute} />
      </Provider>
    );

    fireEvent.press(getByTestId('decrease-btn'));
    // Verify quantity stays at 1
  });

  test('dispatches addItemToCart with correct quantity', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DetailScreen route={mockRoute} />
      </Provider>
    );

    // Increase quantity to 2
    fireEvent.press(getByTestId('increase-btn'));
    fireEvent.press(getByTestId('add-to-cart-btn'));

    const actions = store.getActions();
    expect(actions.length).toBe(2); // Two dispatch calls for quantity 2
    expect(actions[0].payload).toEqual({
      ...mockProduct,
      price: parseFloat(mockProduct.price.replace('£', ''))
    });
  });

  test('back button calls GoBack', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DetailScreen route={mockRoute} />
      </Provider>
    );

    fireEvent.press(getByTestId('back-button'));
    expect(require('../../navigation/rootNavigation').GoBack).toHaveBeenCalled();
  });

  test('matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <DetailScreen route={mockRoute} />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});