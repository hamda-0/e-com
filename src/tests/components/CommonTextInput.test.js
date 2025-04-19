import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import CommonTextInput from '../../component/TextInput/CommonTextInput';

describe('CommonTextInput', () => {
  test('updates search text correctly', () => {
    const mockSetSearchText = jest.fn();
    const { getByPlaceholderText } = render(
      <CommonTextInput 
        searchText="" 
        setSearchText={mockSetSearchText} 
      />
    );
    
    fireEvent.changeText(getByPlaceholderText('Search products...'), 'goggles');
    expect(mockSetSearchText).toHaveBeenCalledWith('goggles');
  });
});