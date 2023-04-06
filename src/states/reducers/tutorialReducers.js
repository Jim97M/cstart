import {
    TUTORIAL_REVIEW_LOADING,
     TUTORIAL_REVIEW_SUCCESS,
     TUTORIAL_REVIEW_FAIL,
} from '../constants/tutorialConstants';

export const tutorialDetailssReducer = (state = [], action) => {
    const {type, payload} = action;
  switch(type){
      case TUTORIAL_REVIEW_LOADING:
          return { loading: true };
      case TUTORIAL_REVIEW_SUCCESS:
          return { loading: false, tutorial: payload };
      case TUTORIAL_REVIEW_FAIL:
          return { loading: false, error: payload };
      default:
          return state;
  
  }
}

