import React from 'react';
import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';


it('handles actions of type save_comment', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
    
});


it('handle actions with unknown type', () => {
    const newState = commentsReducer([], {type: 'unknown'});
    expect(newState).toEqual([]);
});