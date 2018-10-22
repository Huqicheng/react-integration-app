import React from 'react';
import CommentBox from 'components/CommentBox';
import {mount, shallow} from 'enzyme';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    // take the virtual dom
    wrapped = mount(
        <Root><CommentBox /></Root>
    );
});

afterEach(() => {
    // clean up
    wrapped.unmount();    
});


it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
    beforeEach(() => {
        // find the element
        // simulate on it
        // provide fake data
        wrapped.find('textarea').simulate('change', {
            // event object
            target:{value: 'new comment'}
        });

        // force the component to update
        // setState() may not let the component update right when event happens
        // because it's asynchronous. not necessarily re-render immediately.
        wrapped.update()
    });
    
    // simulating change events
    it('has a text area that can type in', () => {
        // assertion on the result
        // retrieve the prop value
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    });

    // simulating change events
    it('textarea becomes a blank after submitting', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');

    });

});

