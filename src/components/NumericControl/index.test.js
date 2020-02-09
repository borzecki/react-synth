import React from 'react';
import { mount } from 'enzyme';
import NumericControl from '.';

const mountContainer = setValue =>
    mount(
        <NumericControl
            value={1}
            setValue={setValue}
            increment={1}
            message="test"
            min={0}
            max={10}
        />
    );

describe('NumericControl component', () => {
    it('handles click action', () => {
        const setValue = jest.fn();
        const wrapper = mountContainer(setValue);
        wrapper
            .find('span')
            .at(0)
            .simulate('click');
        wrapper
            .find('span')
            .at(2)
            .simulate('click');
        expect(setValue.mock.calls).toEqual([[0], [2]]);
    });
    it('handles mouse down and mouse up actions', () => {
        const setValue = jest.fn();
        const wrapper = mountContainer(setValue);
        // increment button
        wrapper
            .find('span')
            .at(0)
            .simulate('mousedown');
        wrapper
            .find('span')
            .at(0)
            .simulate('mouseup');
        // decrement button
        wrapper
            .find('span')
            .at(2)
            .simulate('mousedown');
        wrapper
            .find('span')
            .at(2)
            .simulate('mouseup');
    });
});
