import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it("Main App Renders coorectly", () => {
  renderer.create(<App />);
});