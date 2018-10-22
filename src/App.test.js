import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CommentBox from 'components/CommentBox';
import {shallow,mount} from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><App /></Root>);
});


it('shows a comment box', () => {
  // contain one comment box
  expect(wrapped.find(CommentBox).length).toEqual(1); 
});


it('shows a comment list', () => {
  // contain one comment list
  expect(wrapped.find(CommentList).length).toEqual(1); 
})


