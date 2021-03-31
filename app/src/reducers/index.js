import {
    START_FETCHING_DEFINITION,
    FETCHING_DEFINITION_SUCCESS,
    FETCHING_DEFINITION_FAILURE
} from '../actions';
  
const initialState = {
    definitions: {},
    pronunciation: '',
    word: '',
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING_DEFINITION:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_DEFINITION_SUCCESS:
            return {
                ...state,
                definitions: action.payload.definitions,
                pronunciation: action.payload.pronunciation,
                word: action.payload.word,
                isFetching: false
            }
        case FETCHING_DEFINITION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};