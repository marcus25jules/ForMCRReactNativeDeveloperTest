import Item from '../Item';
import React from 'react';
import { render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native");
  RN.UIManager.getViewManagerConfig = () => { };
  return RN;
});

describe('List Item component', () => {

  const props = {
    label: 'Item Test',
    id: '1',
    image: '',
    onPress: () => { },
    props: {}
  }
  const mockStore = configureStore([]);
  const mock = mockStore(state);
  test('Item list should work', () => {
    const { toJSON } = render(<Provider store={mock} ><Item {...props} /></Provider>);
    expect(toJSON()).toMatchSnapshot();
  })
})
