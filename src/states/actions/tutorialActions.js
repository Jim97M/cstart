import {
    TUTORIAL_REVIEW_FAIL,
    TUTORIAL_REVIEW_LOADING,
    TUTORIAL_REVIEW_SUCCESS,
} from '../constants/tutorialConstants';
import axios from 'axios';

export const detailedTutorial = (tutorialId) => (dispatch) => {
    try{
      dispatch({type: TUTORIAL_REVIEW_LOADING});
     
      axios.get('http://192.168.0.37:5000/api/v1/tutorial/tutorial' + tutorialId)
      .then(res => {
        console.log("Data Is", res.data);
        dispatch({type: TUTORIAL_REVIEW_SUCCESS, payload: res.data});

      }); 
    }
     catch(error){
        dispatch({type: TUTORIAL_REVIEW_FAIL, payload: error.message});
     }

}

