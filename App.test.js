import React from 'react';
import renderer from 'react-test-renderer';
import "react-native";
import App from './App';

import { render, fireEvent } from '@testing-library/react-native';

it("Renders coorectly", () => {
  renderer.create(<App />);
});

it('Todo should be able to add to list', () => {
  const wrapper = render(<App />);
  const input_element = wrapper.getByTestId('input');
  const button_element = wrapper.getByTestId('button');

  fireEvent.changeText(input_element, 'TEST TODO');
  fireEvent.press(button_element);

  const list = wrapper.getByTestId('list');
  console.log(list);
  expect(list.props.data.length).toBe(1);
});