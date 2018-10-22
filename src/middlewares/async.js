export default ({ dispatch }) => next => action => {
    // Check to see if the action has a promise
    // if it does, wait for it to resolve
    // or send the action to the next middleware
    if(action.payload && action.payload.then) {
        action.payload.then((response) => {
            // create a new action with that data
            const newAction = { ...action, payload: response };
            dispatch(newAction);
        });
    } else {
        return next(action);
    }
}
 