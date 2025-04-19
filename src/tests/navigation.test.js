import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import App from '../../App';

describe('Navigation', () => {
  test('navigates to product details', async () => {
    const { getByText, findByText } = render(
      <NavigationContainer>
        <App />
      </NavigationContainer>
    );
    
    fireEvent.press(getByText('Margherita Pizza'));
    expect(await findByText('Product Details')).toBeTruthy();
  });
});