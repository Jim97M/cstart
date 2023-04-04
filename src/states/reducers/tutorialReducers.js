import {
    TUTORIAL_REVIEW_LOADING,
     TUTORIAL_REVIEW_SUCCESS,
     TUTORIAL_REVIEW_FAIL,
} from '../constants/tutorialConstants';

const tutorialDetailssReducer = (state = {tutorial: {}}, action) => {
  switch(action.type){
      case TUTORIAL_REVIEW_LOADING:
          return { loading: true };
      case TUTORIAL_REVIEW_SUCCESS:
          return { loading: false, tutorial: action.payload };
      case TUTORIAL_REVIEW_FAIL:
          return { loading: false, error: action.payload };
      default:
          return state;
  
  }
}

export {tutorialDetailssReducer};
