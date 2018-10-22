import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import App from 'App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    
    // interupt the http requests and send the fake data
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        // back to axios
        status: 200,
        response: [{name: '123'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});


it('can fetch a list of comments and display them', (done) => {
    // render
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    // find the button
    wrapped.find('.fetch-comments').simulate('click');
    
    
    // tiny pause to simulate http delay
    setTimeout(() => {
        wrapped.update();
        // expect to find the list
        expect(wrapped.find('li').length).toEqual(1);

        done();

        wrapped.unmount();
    }, 1000);
    
    
});


it('can fetch a list of comments and display them version 2.0', (done) => {
    // render
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    // find the button
    wrapped.find('.fetch-comments').simulate('click');
    
    
    // moxios wait
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(1);
        done();
        wrapped.unmount();
    });
    
    
    
});