import React from 'react';
import { render } from "@testing-library/react-native";
import App from "./App";

describe("Error Display", () => {  
  it('Should properly render the text', () => {
    const rendered = render(<App value={'hey!'} />);
    const textComponent = rendered.getByTestId('text');
    
    expect(textComponent.props.children).toEqual('hey!');
  });
  
  it('Should render red text', () => {
    const rendered = render(<App value={'hey!'} />);
    const textComponent = rendered.getByTestId('text');
    
    expect(textComponent.props.style).toMatchObject({ color: 'red' });
  });
  
  it('Should wrap text with a flexible wrapper', () => {
    const rendered = render(<App value={'abacaba'} />);
    const wrapperView = rendered.getByTestId('wrapper');
    
    expect(wrapperView.props.style).toMatchObject({ flex: 1 });
  });
});