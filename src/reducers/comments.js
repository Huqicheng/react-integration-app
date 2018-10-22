import {SAVE_COMMENT,FETCH_COMMENT} from 'actions/types';
import axios from 'axios';
// default state is an empty array
export default function(state=[], action) {
    switch(action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload]; // save a new comment to the list
        case FETCH_COMMENT:
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        default:
            return state;
    }
}

