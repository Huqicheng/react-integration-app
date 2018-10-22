// combine all reducers in this file
import {combineReducers} from 'redux';
import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';

export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
});