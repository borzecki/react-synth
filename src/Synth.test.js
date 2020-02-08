import React from 'react';
import ReactDOM from 'react-dom';
import Synth from './Synth';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Synth />, div);
    ReactDOM.unmountComponentAtNode(div);
});
