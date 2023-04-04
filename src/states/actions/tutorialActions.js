import {
    TUTORIAL_ADD_FAIL,
    TUTORIAL_DELETE_LOADING,
    TUTORIAL_DELETE_SUCCESS,
    TUTORIAL_REVIEW_FAIL,
    TUTORIAL_REVIEW_LOADING,
    TUTORIAL_REVIEW_SUCCESS,
} from '../actions/types';
import axios from 'axios';

const detailedTutorial = (tutorialId) => async(dispatch, getState) => {
    try{
      dispatch({type: TUTORIAL_REVIEW_LOADING, payload: tutorialId});
    const {data} = axios.get('http://192.168.0.37:5000/api/tutorials/'+tutorialId);
    dispatch({type: TUTORIAL_REVIEW_SUCCESS, payload: data});
    }
     catch(error){
        dispatch({type: TUTORIAL_REVIEW_FAIL, payload: error.message});
     }

}

export {detailedTutorial};