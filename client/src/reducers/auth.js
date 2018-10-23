import { AUTH_USER, AUTH_FAILED } from "../actions/types";

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
}


export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case AUTH_USER:
            return {authenticated: action.payload, errorMessage: ''};
        case AUTH_FAILED:
            return {...state, errorMessage:action.payload};
        default:
            return state;
    }
}