const Owlbot = require('owlbot-js');
const client = Owlbot('f9c4ac32adf37dc3c46512af26287b83e86c35eb');

export const START_FETCHING_DEFINITION = 'START_FETCHING_DEFINITION';
export const FETCHING_DEFINITION_SUCCESS = 'FETCHING_DEFINITION_SUCCESS';
export const FETCHING_DEFINITION_FAILURE = 'FETCHING_DEFINITION_FAILURE';

export const getDefinition = (word) => (dispatch) => {
    dispatch({
        type: START_FETCHING_DEFINITION
    });
    client.define(word).then((result) => {
        console.log(result);
        dispatch({
            type: FETCHING_DEFINITION_SUCCESS,
            payload: result
        })
        dispatch({ type: FETCHING_DEFINITION_FAILURE, payload: '' })
    }).catch(err => {
        console.error('unable to get definition: ', err.message)
        dispatch({ type: FETCHING_DEFINITION_FAILURE, payload: 'No such word exists!' })
    });
}