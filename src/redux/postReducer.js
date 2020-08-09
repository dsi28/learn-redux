import { FETCH_POSTS, NEW_POSTS } from './actionTypes';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, items: action.payload }
            break;
        case NEW_POSTS:
            
            break;
        default:
            return state;
            break;
    }
}