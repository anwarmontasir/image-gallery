import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from '../components/app/App';

describe('App works', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  
  it('renders a snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});