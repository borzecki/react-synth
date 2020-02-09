import React from 'react';
import { mount } from 'enzyme';
import Synth from './Synth';

window.matchMedia = jest.fn(() => ({
    matches: false,
    addListener: jest.fn()
}));

it('renders without crashing', () => {
    mount(<Synth />);
});
