import React from 'react';
import { mount } from 'enzyme';
import Synth from './Synth';

it('renders without crashing', () => {
    mount(<Synth />);
});
