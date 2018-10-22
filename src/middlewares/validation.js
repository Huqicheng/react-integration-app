import tv4 from 'tv4';
import jsonSchema from './jsonSchema';

export default ({dispatch, getState}) => next => action => {
    // JSON Schema & tv4 for validation of states
    next(action);
    var valid = tv4.validate(getState(), jsonSchema);
    if(!valid) {
        console.warn('invalid state schema detected');
    }
    
};